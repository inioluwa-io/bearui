import { useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import { ThemeMode, RapUIThemeMode } from "../types"
import { SET_MODE } from "../redux/types"
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
  const mode = useCallback<() => RapUIThemeMode>(() => {
    return useSelector((state: any) => state.themeReducer.themeMode)
  }, [])
  const dispatch = useDispatch()

  const finalSetMode = useCallback(
    (mode: RapUIThemeMode) => {
      if (isSupported(["lightmode", "darkmode"], mode)) {
        const body = document.body
        body.classList.remove("lightmode")
        body.classList.remove("darkmode")

        body.classList.add(mode)
        dispatch({ type: SET_MODE, payload: mode })
        return mode
      } else {
        if (process.env.NODE_ENV !== "production") {
          throw new Error(
            `Expected 'lightmode' or 'darkmode' as argument but got ${mode} instead`
          )
        }
      }
    },
    [dispatch]
  )

  return [mode(), finalSetMode]
}

export default useThemeMode
