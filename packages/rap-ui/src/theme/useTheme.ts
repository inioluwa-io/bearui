import { useContext } from "react"
import { RapUITheme } from "../types"
import { ThemeContext } from "./themeContext"

/**
 * Get the theme stored in the context
 */
const useTheme = (): RapUITheme => useContext(ThemeContext)

export default useTheme
