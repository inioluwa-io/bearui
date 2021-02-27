import React, {
  ReactElement,
  useRef,
  useEffect,
  useState,
  useCallback,
  HTMLAttributes,
} from "react"
import styled from "styled-components"
import { darken, lighten } from "polished"
import { NavbarComponent, NavigationConfigProps, RapUITheme } from "../types"
import {
  useTheme,
  useThemeMode,
  useCollapseSideBar,
  useHideSideBar,
} from "../theme"
import Icon from "@mdi/react"
import { mdiMagnify } from "@mdi/js"
import { Input } from ".."
import { Link } from "react-router-dom"
import { getColorFromTheme } from "../util"
import { FlexColumn, FlexRow } from "../layout"

const NavbarContainer: any = styled.div`
  position: sticky;
  height: 65px;
  padding: 0 20px;
  z-index: 999;
  background: ${(props: any) => props.background};
  font-size: 14px;
  ${(props: any) => props.positionStyle}
  display: flex;
  justify-content: space-around;
  align-items: center;

  .right {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    grid-gap: 16px;
  }
  .left {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    > *:not(:last-child) {
      margin-right: 10px;
    }

    button.sidebar-toggle-btn {
      display: none;
      padding: 5px;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: transparent;
      border: none;
      cursor: pointer;
      outline: none;

      span {
        position: relative;
        width: 12px;
        height: 2px;
        border-radius: 2px;
        background: ${(props: any) => props.primaryColor};

        &:nth-child(2) {
          width: 24px;
        }

        &:not(:last-child) {
          margin-bottom: 4px;
        }
      }
      @media (max-width: 1200px) {
        display: flex;
      }
    }
  }

  a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    // > div > div {
    //   display: flex;
    //   justify-content: center;
    //   align-items: center;
    // }
  }

  @media (max-width: 768px) {
    padding: 0 15px;
    width: calc(100% - 30px);

    #navbar-search {
      transition: all 0.25s;
      + div svg {
        transition: all 0.25s;
        path {
          transition: all 0.25s;
        }
      }

      &:not(:focus) {
        background: none;
        width: 5px;
        border: none;
        flex: unset;
        z-index: 1;
        cursor: pointer;

        &::placeholder {
          opacity: 0;
        }

        + div svg {
          width: 1.5rem !important;
          height: 1.5rem !important;

          path {
            fill: ${(props: any) => props.textColor} !important;
          }
        }
      }
    }
  }
`

const SearchResultLi: any = styled.li`
  .icon {
    padding: 8px;
    border-radius: 11px;
    background: ${(props: any) => props.iconColor};
  }
`
const SearchResultContainer: any = styled.div`
  position: absolute;
  width: 30rem;
  border-radius: 20px;
  z-index: 1;
  top: 100%;
  left: 20px;
  overflow: hidden;
  box-shadow: 0 8px 25px -6px rgba(0, 0, 0, 0.45);

  ul {
    overflow: auto;
    height: 100%;
    position: relative;
    text-align: left;
    background: ${(props: any) => props.backgroundColor};
    max-height: 20rem;
  }

  li {
    color: #fff;
    text-align: left;
    transition: background 0.25s;

    &:hover {
      background: ${(props: any) => lighten(0.025, props.highlightColor)};
    }

    a {
      padding: 12px 10px;
      text-align: left;

      p {
        font-weight: 500;
      }

      span {
        font-size: 12px;
      }
    }
  }
  @media (max-width: 768px) {
    width: 92vw;
    left: 15px;
  }
`

type SearchResultProps = {
  data: NavigationConfigProps[]
  searchValue: string
  background: string
  highlight: string
  theme: RapUITheme
} & HTMLAttributes<HTMLDivElement>

const SearchResult: React.FC<SearchResultProps> = ({
  background,
  highlight,
  data,
  theme,
  searchValue,
}) => {
  let globalIcon: string = ""
  let globalColor: string = ""
  let globalType: string = ""
  const renderResult = data => {
    return data.map((item: any, idx) => {
      const { title, key, path, subMenu, icon, color, pathProps } = item
      if (icon) {
        globalIcon = icon
        globalColor = getColorFromTheme(color, theme)
        globalType = title
      }
      if (
        !subMenu.length &&
        (title.toLowerCase().includes(searchValue.toLowerCase()) ||
          path.toLowerCase().includes(searchValue.toLowerCase()))
      ) {
        return (
          <SearchResultLi key={key} iconColor={globalColor}>
            <Link to={path} {...pathProps}>
              <FlexRow gap="10px" align="left">
                <Icon
                  className="icon"
                  path={globalIcon}
                  size={0.8}
                  color="#ffffff"
                />
                <FlexColumn
                  gap="3px"
                  align="left"
                  style={{ width: "fit-content" }}
                >
                  <p> {title}</p>
                  <span>{globalType}</span>
                </FlexColumn>
              </FlexRow>
            </Link>
          </SearchResultLi>
        )
      } else {
        return renderResult(subMenu)
      }
    })
  }
  return (
    <SearchResultContainer
      backgroundColor={background}
      highlightColor={highlight}
    >
      <ul>{renderResult(data)}</ul>
    </SearchResultContainer>
  )
}

const Navbar: React.FC<NavbarComponent> = ({
  links,
  searchData = [],
  searchable = true,
  position = "floating",
}) => {
  const [theme] = useTheme()
  const [themeMode] = useThemeMode()
  const [collapseSideBar, setCollapseSideBar] = useCollapseSideBar()
  const background: string = theme[themeMode].background
  const [pageWidth, setPageWidth] = useState<number | undefined>()
  const [hideSideBar, setHideSideBar] = useHideSideBar()
  const [showSearchResult, setShowSearchResult] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>("")
  const refs = useRef<HTMLDivElement>()

  let indicatorBackground = lighten(0.2, theme[themeMode].background)
  if (themeMode === "darkmode") {
    indicatorBackground = lighten(0.04, theme[themeMode].background)
  }

  const updatePageWidth = useCallback(() => {
    const innerWidth = window.innerWidth
    setPageWidth(innerWidth)
  }, [])

  const handleSearchDropdownToggle = () => {
    setShowSearchResult(prev => !prev)
  }

  const getPositionStyle = () => {
    switch (position) {
      case "static": {
        return `
        width: calc(100% - 40px);
        position:static;`
      }
      case "sticky": {
        return `
        width: calc(100% - 40px);
        position:sticky;
        top:0;
        // box-shadow: 0 0 25px -7px rgba(0,0,0,.15);`
      }
      case "floating": {
        return `
        width: calc(100% - 90px);
        border-radius:10px;
        position:sticky;
        top:20px;
        box-shadow: 0 0 25px -7px rgba(0,0,0,.15);
        margin:15px 25px;

        @media (max-width: 768px) {
          margin:15px;
          width: calc(100% - 70px);
        }
        `
      }
      default: {
        return `
        width: calc(100% - 90px);
        border-radius:10px;
        top:20px;
        position:sticky;
        box-shadow: 0 0 25px -7px  ${darken(0.07, theme[themeMode].background)};
        margin:15px 25px;`
      }
    }
  }

  const toggleSideBar = () => {
    if (pageWidth <= 1200) {
      setHideSideBar(!hideSideBar)
    } else {
      setCollapseSideBar(!collapseSideBar)
    }
  }

  useEffect(() => {
    updatePageWidth()
    window.addEventListener("resize", updatePageWidth)
    return () => {
      window.removeEventListener("resize", updatePageWidth)
    }
  }, [updatePageWidth])

  useEffect(() => {
    document.body.classList.add(`nav-${position}`)
  }, [position])

  const handleBlur = useCallback(
    e => {
      const DOMNode = refs.current
      if (DOMNode) {
        const target = DOMNode.querySelector(".dp")
        const dpTarget = DOMNode.querySelector(".dp-trgt")

        if (!dpTarget.contains(e.target) && !target.contains(e.target)) {
          setShowSearchResult(false)
        }
      }
    },
    [refs]
  )
  useEffect(() => {
    window.addEventListener("click", e => {
      handleBlur(e)
    })

    return (): void => {
      window.removeEventListener("click", e => {
        handleBlur(e)
      })
    }
  }, [refs, handleBlur])

  return (
    <NavbarContainer
      background={background}
      primaryColor={theme.colors.primary}
      positionStyle={getPositionStyle}
      textColor={theme[themeMode].textColor}
      ref={refs}
    >
      <div className="left">
        <button className="sidebar-toggle-btn" onClick={toggleSideBar}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        {searchable && (
          <>
            <Input
              id="navbar-search"
              onInputChange={value => {
                setInputValue(value)
              }}
              placeholder="Search"
              iconBorder={false}
              corners="rounded"
              color="primary"
              onFocus={handleSearchDropdownToggle}
              background={theme[themeMode].cardbackground}
              icon={mdiMagnify}
              className="dp"
            />
            {showSearchResult && !!inputValue.length && (
              <SearchResult
                className="dp-trgt"
                searchValue={inputValue}
                theme={theme}
                data={searchData}
                background={indicatorBackground}
                highlight={theme[themeMode].cardbackground}
              />
            )}
            {/* {<SearchResult searchValue={inputValue} data={searchData} />} */}
          </>
        )}
      </div>
      <div className="right">
        {links.map((link: ReactElement | string, idx: number) => (
          <React.Fragment key={idx}>{link}</React.Fragment>
        ))}
      </div>
    </NavbarContainer>
  )
}
export default Navbar
