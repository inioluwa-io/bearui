import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from "../types"

export const addNotification = payload => ({
  type: ADD_NOTIFICATION,
  payload,
})
export const removeNotification = payload => ({
  type: REMOVE_NOTIFICATION,
  payload,
})
