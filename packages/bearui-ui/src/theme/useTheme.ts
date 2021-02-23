import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SET_THEME } from ".."
import { RapUITheme } from "../types"

/**
 * Get the theme stored in the context
 */
const useTheme = (): [RapUITheme, any] => {
  const dispatch = useDispatch()

  const setTheme = useCallback(
    props => {
      dispatch({ type: SET_THEME, payload: props })
    },
    [dispatch]
  )

  return [useSelector((state: any) => state.themeReducer.theme), setTheme]
}

export default useTheme
