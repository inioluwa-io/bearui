import { combineReducers } from "redux"
import notificationReducer from "./notificationReducer"
import resourceReducer from "./resourceReducer"

export default combineReducers({ notificationReducer, resourceReducer })
