import { useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import { SideBarHook } from "../types"
import { COLLAPSE_SIDEBAR } from "../redux/types"

const useCollapseSideBar = (): SideBarHook => {
  const mode: boolean = useSelector(
    (state: any) => state.sideBarReducer.collapseSideBar
  )

  const dispatch = useDispatch()

  const setHideSideBar = useCallback(
    (mode: boolean) => {
      dispatch({ type: COLLAPSE_SIDEBAR, payload: mode })
      return mode
    },
    [dispatch]
  )

  return [mode, setHideSideBar]
}

export default useCollapseSideBar
