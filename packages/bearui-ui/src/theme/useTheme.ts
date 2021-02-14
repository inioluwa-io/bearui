import { useContext } from "react"
import { useSelector } from "react-redux"
import { RapUITheme } from "../types"
import { ThemeContext } from "./themeContext"

/**
 * Get the theme stored in the context
 */
const useTheme = (): RapUITheme => useSelector((state: any) => state.themeReducer.theme)

export default useTheme
