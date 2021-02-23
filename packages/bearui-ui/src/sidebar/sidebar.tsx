import React, { useCallback, useEffect, useState, useRef } from "react"
import styled from "styled-components"
import { FlexRow, FlexColumn } from "../layout"
import { darken, rgba } from "polished"
import {
  useTheme,
  useThemeMode,
  useCollapseSideBar,
  useHideSideBar,
} from "../theme"
import UserProfile from "./components/userProfile"

const SidebarContainer: any = styled.div`
  width: 16.5rem;
  background: ${(props: any) => props.background};
  position: sticky;
  border-right: 1px solid ${(props: any) => props.boxShadow};
  top: 0;
  height: 100vh;
  z-index: 9999;
  display: grid;
  grid-template-rows: 65px auto 1fr;
  overflow: hidden;

  .logo {
    display: flex;
    align-items: center;

    > *:not(:last-child) {
      margin-right: 10px;
    }
    img {
      max-width: 40px;
    }
  }

  .scrollbar {
    overflow: hidden auto;
    padding: 20px 13px;
    background: ${(props: any) => props.background};
  }

  &:hover {
    * {
      ::-webkit-scrollbar-thumb {
        // background: #aaaaaa88;
      }
    }
  }

  #side-bar {
    white-space: nowrap;

    h6 {
      font-weight: 500;
      color: rgba(125, 125, 125, 0.7);
      font-size: 13px;
      // font-family: Nunito sans;
      text-transform: uppercase;

      &:not(:first-child) {
        margin-top: 15px;
      }
    }

    > .group-link:not(:last-child) {
      margin-bottom: 0;
    }

    .group-link {
      header {
        padding: 0 14px;
        width: calc(100% - 28px);
        height: 2.6rem;
        align-items: center;

        &.active {
          border-radius: 7px;
          background: rgba(125, 125, 125, 0.125);

          + .sc-cnt {
            margin-top: 5px;
          }
        }
      }
      .sc-cnt {
        padding: 0;
      }
    }

    a {
      text-decoration: none;
      font-size: 14px;
      padding: 0 14px;
      width: calc(100% - 28px);
      height: 2.6rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 7px;
      font-size: 15px;
      font-weight: 500;
      transition: all 0.25s ease;

      &:not(:last-child) {
        margin-bottom: 0 !important;
      }

      &.active {
        background: ${(props: any) => props.primaryColor};
        background: linear-gradient(
          138deg,
          ${(props: any) => props.primaryColor},
          ${(props: any) => rgba(props.primaryColor, 0.6)}
        );
        * {
          color: #fff;
        }

        svg path {
          fill: #fff !important;
        }
      }
    }
  }
  .header {
    background: ${(props: any) => props.background};
    button.sidebar-toggle-btn {
      padding: 5px;
      display: flex;
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
    }
  }
  transition: width 0.35s;
  ${(props: any) =>
    props.hideSideBar
      ? `
    @media (max-width: 1200px) {
      position: fixed;
      transform: translateX(-100%);
      transition: transform 0.35s;
  
      + .underlay {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 9991;
        height: 100vh;
        width: 100%;
        background: rgba(0, 0, 0, 0.4);
        visibility: hidden;
      }
  
      &.sidebar-collapse {
        transform: translateX(-0%);
  
        + .underlay {
          visibility: visible;
        }
      }
      .header {
        button {
          display: block;
        }
      }
    }
    `
      : `
      @media (max-width: 1200px) {
        position: fixed;
        transform: translateX(0%);
        transition: transform 0.35s;
    
        + .underlay {
          position: fixed;
          left: 0;
          top: 0;
          z-index: 9991;
          height: 100vh;
          width: 100%;
          background: rgba(0, 0, 0, 0.4);
          visibility: visible;
        }
    
        &.sidebar-collapse {
          transform: translateX(100%);
    
          + .underlay {
            visibility: visible;
          }
        }
        .header {
          button {
            // display: none;
          }
        }
      }`}

  ${(props: any) =>
    props.collapseSideBar &&
    `
    @media (min-width: 1200px) {
  width: 5rem;

  .mobile-usr-profile{
    display:flex;
  }
  .usr-profile,
  .logo {
    display: none;
  }
  #side-bar {
    h6 {
      display: none;
    }
    a {
      div {
        justify-content: center;
      }
      p {
        position: absolute;
        z-index: 1;
        background: ${(props: any) => darken(0.15, props.background)};
        right: 0;
        padding: 3px 5px;
        border-radius: 3px;
        opacity: 0;
        font-size: 14px;
        transition: 0.25s ease;
        transform: translateX(70%);
        font-weight: 400;
      }
      &:hover {
        p {
          opacity: 1;
        }
      }
    }
  }
  .group-link header {
    p,
    .sc-ic {
      display: none;
    }
    .p {
      > div {
        justify-content: center;
      }
    }
  }
  .group-link header {
    padding: 14px;
    width: calc(100% - 28px);
    height: unset;
  }
  .header {
    justify-content: center;
    width: 100% !important;
    padding: 0 !important;
    margin: 0;

    > * {
      flex: unset;
      margin: 0;
    }
  }}
  `}
`

type SidebarProps = {
  logo: any
  avatarImg?: string
  avatarText?: string
  fullName?: string
  role?: string
  onEditProfile?: () => void
  onSignOut?: () => void
}

const Sidebar: React.FC<SidebarProps> = ({
  avatarImg,
  avatarText,
  fullName,
  role,
  onEditProfile,
  onSignOut,
  logo,
  children,
}) => {
  const [theme] = useTheme()
  const [themeMode] = useThemeMode()
  const refs = useRef<HTMLDivElement>()
  const [collapseSideBar, setCollapseSideBar] = useCollapseSideBar()
  const [hideSideBar, setHideSideBar] = useHideSideBar()

  const [pageWidth, setPageWidth] = useState<number | undefined>()

  const updatePageWidth = useCallback(() => {
    const innerWidth = window.innerWidth
    setPageWidth(innerWidth)
  }, [])

  const handleHideSideBar = useCallback(
    e => {
      const underlay: HTMLButtonElement = document.querySelector(".underlay")

      if (underlay?.contains(e.target)) {
        setHideSideBar(true)
      }
    },
    [pageWidth, setHideSideBar]
  )

  const toggleSideBar = () => {
    if (pageWidth <= 1200) {
      setHideSideBar(!hideSideBar)
    } else {
      setCollapseSideBar(!collapseSideBar)
    }
  }

  // set device width
  useEffect(() => {
    updatePageWidth()
    window.addEventListener("resize", updatePageWidth)
    return () => {
      window.removeEventListener("resize", updatePageWidth)
    }
  }, [updatePageWidth])

  useEffect(() => {
    window.addEventListener("click", handleHideSideBar)
    return () => {
      window.removeEventListener("click", handleHideSideBar)
    }
  }, [handleHideSideBar])

  useEffect(() => {
    const sideBar: HTMLDivElement = document.querySelector("#rap-sidebar")
    collapseSideBar
      ? sideBar.classList.add("collapsed")
      : sideBar.classList.remove("collapsed")
  }, [collapseSideBar])

  return (
    <>
      <SidebarContainer
        ref={refs}
        background={theme[themeMode].background}
        boxShadow={theme[themeMode].cardbackground}
        primaryColor={theme.colors.primary}
        id="rap-sidebar"
        collapseSideBar={collapseSideBar}
        hideSideBar={hideSideBar}
      >
        <FlexRow
          align="stretch"
          position="center"
          style={{
            width: "calc(100% - 15px)",
            padding: "0 15px",
            overflow: "hidden",
          }}
          className="header"
        >
          {logo && <div className="logo">{logo}</div>}
          <div>
            <FlexRow align="right">
              <button className="sidebar-toggle-btn" onClick={toggleSideBar}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </FlexRow>
          </div>
        </FlexRow>
        <UserProfile
          pageWidth={pageWidth}
          avatarImg={avatarImg}
          avatarText={avatarText}
          onSignOut={onSignOut}
          fullName={fullName}
          role={role}
          onEditProfile={onEditProfile}
        />
        <div className="scrollbar">
          <FlexColumn id="side-bar" gap="5px" align="left">
            {children}
          </FlexColumn>
        </div>
      </SidebarContainer>
      <div className="underlay"></div>
    </>
  )
}
export default Sidebar
