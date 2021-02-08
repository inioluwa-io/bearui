import { useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import { SideBarHook } from "../types"
import { HIDE_SIDEBAR } from "../redux/types"

const useHideSideBar = (): SideBarHook => {
  const mode: boolean = useSelector(
    (state: any) => state.sideBarReducer.hideSideBar
  )

  const dispatch = useDispatch()

  const setHideSideBar = useCallback(
    (mode: boolean) => {
      dispatch({ type: HIDE_SIDEBAR, payload: mode })
      return mode
    },
    [dispatch]
  )

  return [mode, setHideSideBar]
}

export default useHideSideBar
