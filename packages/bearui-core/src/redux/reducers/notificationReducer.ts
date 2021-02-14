import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from "../types"
import { NotifyProps } from "../../types"
import { Reducer } from "react"

const initialState = {
  notification: <NotifyProps[]>[],
}

type State = {
  notification: NotifyProps[]
}

type ActionType = {
  readonly type: typeof ADD_NOTIFICATION | typeof REMOVE_NOTIFICATION
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
      }
    case REMOVE_NOTIFICATION:
      const payloadCopy = [...state.notification]
      payloadCopy.shift()
      return {
        ...state,
        notification: payloadCopy,
      }
    default:
      return state
  }
}
export default notificationsReducer
