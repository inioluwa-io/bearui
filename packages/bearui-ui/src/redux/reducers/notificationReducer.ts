import {
  ADD_NOTIFICATION,
  ADD_TMP_NOTIFICATION,
  REMOVE_NOTIFICATION,
  REMOVE_TMP_NOTIFICATION,
} from "../types"
import { NotifyProps } from "../../types"
import { Reducer } from "react"

const initialState = {
  notification: <NotifyProps[]>[],
  tmp: <NotifyProps[]>[],
}

type State = {
  notification: NotifyProps[]
  tmp: NotifyProps[]
}

type ActionType = {
  readonly type:
    | typeof ADD_NOTIFICATION
    | typeof REMOVE_NOTIFICATION
    | typeof REMOVE_TMP_NOTIFICATION
    | typeof ADD_TMP_NOTIFICATION
  readonly payload: NotifyProps
}

const notificationsReducer: Reducer<State, ActionType> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return {
        ...state,
        notification: [...state.notification, action.payload],
        tmp: [...state.tmp, action.payload],
      }
    case REMOVE_NOTIFICATION: {
      return {
        ...state,
        notification: [],
      }
    }
    case REMOVE_TMP_NOTIFICATION: {
      const payloadCopy = [...state.tmp]
      payloadCopy.shift()
      return {
        ...state,
        tmp: payloadCopy,
      }
    }
    default:
      return state
  }
}
export default notificationsReducer
