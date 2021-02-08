import { createStore, compose, applyMiddleware } from "redux"
import rootReducer from "./reducers"
import thunk from "redux-thunk"

const middleware = [thunk]

const initialState = {}
const windowObj: any = window

const NODE_ENV = process.env.NODE_ENV

const composer =
  NODE_ENV === "development"
    ? compose(
        applyMiddleware(...middleware),
        windowObj.__REDUX_DEVTOOLS_EXTENSION__ &&
          windowObj.__REDUX_DEVTOOLS_EXTENSION__()
      )
    : compose(applyMiddleware(...middleware))

const store = createStore(rootReducer, initialState, composer)
export default store
