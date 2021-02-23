import { NavbarPosition, RapUIThemeMode, RapUITheme } from "@rap/ui"

type ThemeConfigProps = {
  navbarPosition: NavbarPosition
  currentTheme: RapUIThemeMode
  colorPalette: RapUITheme
  restEndPoint: string
}

const themeConfig: ThemeConfigProps = {
  navbarPosition: "sticky",
  currentTheme: "darkmode",
  restEndPoint: "http://localhost:5000",
  colorPalette: {
    colors: {
      primary: "#3e49da",
      success: "rgb(40,199,111)",
      info: "#3e49da",
      warning: "rgb(255,159,67)",
      danger: "rgb(234,84,85)",
      transparent: "rgba(255,255,255,0)",
      white: "#ffffff",
      dark: "rgb(30,30,30)",
    },
    darkmode: {
      background: "#282c34",
      cardbackground: "#363b44",
      textColor: "#f4f4f4",
    },
    lightmode: {
      cardbackground: "#fdfdfd",
      background: "#f0f0f3",
      textColor: "#444444",
    },
  },
}

export default themeConfig
