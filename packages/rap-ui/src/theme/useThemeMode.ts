import { useContext } from "react"
import { ThemeMode, RapUIThemeMode } from "../types"
import { ThemeModeContext } from "./modeContext"
import { isSupported } from "../util"

/**
 * A hook to set and get theme mode
 *
 * @returns An array of two values. First is the current theme mode.
 * The second is a function that accepts a string mode action to set theme
 * @example
 *
 * import {useThemeMode} from "rap-ui"
 *
 * const Dashboard = () => {
 *      const [mode, setMode] = useThemeMode()
 *
 *      return <>
 *      <Button onClick= {()=>{setMode("darkmode")}}>
 *          darkmode
 *      <Button/>
 *      <Button onClick= {()=>{setMode("lightmode")}}>
 *          lightmode
 *      <Button/>
 *      </>
 * }
 */
const useThemeMode = (): ThemeMode => {
  const { mode, setMode } = useContext(ThemeModeContext)

  const finalSetMode = (mode: RapUIThemeMode) => {
    if (isSupported(["lightmode", "darkmode"], mode)) {
      const body = document.body
      body.classList.remove("lightmode")
      body.classList.remove("darkmode")
      body.classList.add(mode)
      setMode(mode)
    } else {
      if (process.env.NODE_ENV !== "production") {
        throw new Error(
          `Expected 'lightmode' or 'darkmode' as argument but got ${mode} instead`
        )
      }
    }
  }
  return [mode, finalSetMode]
}

export default useThemeMode
