import React, { ReactElement, useEffect, useState, useCallback } from "react"
import styled from "styled-components"
import { darken } from "polished"
import { NavbarComponent } from "../types"
import {
  useTheme,
  useThemeMode,
  useCollapseSideBar,
  useHideSideBar,
} from "../theme"
import Icon from "@mdi/react"
import { mdiMagnify, mdiMenu } from "@mdi/js"
import { Input } from ".."

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

    > div > div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 768px) {
    padding: 0 15px;
    width: calc(100% - 30px);
  }
`

const Navbar: React.FC<NavbarComponent> = ({
  links,
  searchable = true,
  position = "floating",
}) => {
  const [theme] = useTheme()
  const [themeMode] = useThemeMode()
  const [collapseSideBar, setCollapseSideBar] = useCollapseSideBar()
  const background: string = theme[themeMode].background
  const [pageWidth, setPageWidth] = useState<number | undefined>()
  const [hideSideBar, setHideSideBar] = useHideSideBar()

  const updatePageWidth = useCallback(() => {
    const innerWidth = window.innerWidth
    setPageWidth(innerWidth)
  }, [])

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

  return (
    <NavbarContainer
      background={background}
      primaryColor={theme.colors.primary}
      positionStyle={getPositionStyle}
    >
      <div className="left">
        <button className="sidebar-toggle-btn" onClick={toggleSideBar}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        {searchable && (
          <Input
            id="navbar-search"
            onInputChange={() => {}}
            placeholder="Search"
            iconBorder={false}
            clearButton={true}
            corners="rounded"
            color="primary"
            background={theme[themeMode].cardbackground}
            icon={mdiMagnify}
          />
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
