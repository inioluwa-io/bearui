import React, { ReactElement, useEffect } from "react"
import styled from "styled-components"
import { darken } from "polished"
import { NavbarComponent } from "../types"
import { useTheme, useThemeMode } from "../theme"

const NavbarContainer: any = styled.div`
  position: sticky;
  height: 65px;
  padding: 0 20px;
  display: flex;
  z-index: 999;
  justify-content: flex-end;
  align-items: center;
  grid-gap: 20px;
  background: ${(props: any) => props.background};
  font-size: 14px;
  ${(props: any) => props.positionStyle}

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
      {links.map((link: ReactElement | string, idx: number) => (
        <React.Fragment key={idx}>{link}</React.Fragment>
      ))}
    </NavbarContainer>
  )
}
export default Navbar
