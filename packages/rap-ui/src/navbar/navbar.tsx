import React, { ReactElement, useEffect } from "react"
import styled from "styled-components"
import { darken } from "polished"
import { NavbarComponent } from "../types"
import { useTheme, useThemeMode } from "../theme"
import Icon from "@mdi/react"
import { mdiMenu } from "@mdi/js"

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
    display: none;
    justify-content: flex-start;
    align-items: center;

    button {
      background: none;
      outline: none;
      cursor: pointer;
      border: none;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    @media (max-width: 1200px) {
      display: flex;
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
  }
`

const Navbar: React.FC<NavbarComponent> = ({
  links,
  position = "floating",
}) => {
  const theme = useTheme()
  const [themeMode] = useThemeMode()
  const background: string = theme[themeMode].cardbackground

  const getPostitionStyle = () => {
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
        box-shadow: 0 0 25px -7px rgba(0,0,0,.15);`
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

  useEffect(() => {
    document.body.classList.add(`nav-${position}`)
  }, [position])

  return (
    <NavbarContainer background={background} positionStyle={getPostitionStyle}>
      <div className="left">
        <button
          onClick={() => {
            document
              .querySelector("#rap-sidebar")
              ?.classList?.toggle("sidebar-collapse")
          }}
        >
          <Icon path={mdiMenu} size={1} />
        </button>
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
