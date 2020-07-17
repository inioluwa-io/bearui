import { ADD_NOTIFICATION } from "../types"
import { NotifyProps } from "../../types"

const initialState = {
  notification: <NotifyProps[]>[],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return {
        ...state,
        notification: [...state.notification, action.payload],
      }
    default:
      return state
  }
}
