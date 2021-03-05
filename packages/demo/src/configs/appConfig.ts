import { NavbarPosition, RapUIThemeMode, RapUITheme } from "@bearui/ui"

type ThemeConfigProps = {
  navbarPosition: NavbarPosition
  currentTheme: RapUIThemeMode
  colorPalette: RapUITheme
  restEndPoint: string
  availableLanguages: any
}

const themeConfig: ThemeConfigProps = {
  navbarPosition: "sticky",
  currentTheme: "darkmode",
  restEndPoint: "https://sima-server.herokuapp.com/api/v1/admin",
  availableLanguages: {
    en: { name: "English", countryCode: "GB" },
    fr: { name: "Français", countryCode: "FR" },
  },
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
