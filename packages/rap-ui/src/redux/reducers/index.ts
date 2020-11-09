import { combineReducers } from "redux"
import notificationReducer from "./notificationReducer"
import resourceReducer from "./resourceReducer"
import themeReducer from "./themeReducer"

export default combineReducers({
  notificationReducer,
  resourceReducer,
  themeReducer,
})
