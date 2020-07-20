import { Action, ActionCreator } from "redux"
import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from "../types"

export const addNotification: ActionCreator<Action> = payload => ({
  type: ADD_NOTIFICATION,
  payload,
})
export const removeNotification: ActionCreator<Action> = payload => ({
  type: REMOVE_NOTIFICATION,
  payload,
})
