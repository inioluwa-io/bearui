import React, { createContext } from "react"
import { RapUITheme } from "../types"

const defaultProvider: RapUITheme = {
  colors: {
    primary: "rgb(115,103,240)",
    success: "rgb(40,199,111)",
    info: "rgb(45, 136, 255)",
    warning: "rgb(255,159,67)",
    danger: "rgb(234,84,85)",
    transparent: "rgba(255,255,255,0)",
    white: "#ffffff",
    dark: "rgb(30,30,30)",
  },
  darkmode: {
    background: "#282c34",
    cardbackground: "#3E4451",
    textColor: "#f4f4f4",
  },
  lightmode: {
    background: "#e7e7e7",
    cardbackground: "#fdfdfd",
    textColor: "#444444",
  },
}

const ThemeContext = createContext<RapUITheme>(null)

ThemeContext.displayName = "ThemeContext"
const ThemeProvider: React.FC<{ value: RapUITheme }> = ({
  value,
  children,
}) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export { ThemeContext }
export default ThemeProvider
