import { HIDE_SIDEBAR, COLLAPSE_SIDEBAR } from "../types"
import { Reducer } from "react"

const initialState = {
  hideSideBar: false,
  collapseSideBar: false,
}

type State = {
  hideSideBar: boolean
  collapseSideBar: boolean
}

type ActionType = {
  readonly type:
    | typeof HIDE_SIDEBAR
    | typeof COLLAPSE_SIDEBAR
  readonly payload: boolean
}

const sideBarReducer: Reducer<State, ActionType> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case HIDE_SIDEBAR:
      return {
        ...state,
        hideSideBar: action.payload,
      }
    case COLLAPSE_SIDEBAR:
      return {
        ...state,
        collapseSideBar: action.payload,
      }
    default:
      return state
  }
}
export default sideBarReducer
