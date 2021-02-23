import { SET_MODE, SET_THEME } from "../types"
import { RapUITheme, RapUIThemeMode } from "../../types"
import { Reducer } from "react"

const defaultProvider: RapUITheme = {
  colors: {
    primary: "rgb(115,103,240)",
    success: "rgb(40,199,111)",
    info: "rgb(45, 136, 255)",
    warning: "rgb(255,159,67)",
    danger: "rgb(234,84,85)",
    transparent: "rgba(255,255,255,0)",
    white: "#ffffff",
    dark: "rgb(30,30,30)",
  },
  darkmode: {
    background: "#282c34",
    cardbackground: "#3E4451",
    textColor: "#f4f4f4",
  },
  lightmode: {
    background: "#e7e7e7",
    cardbackground: "#fdfdfd",
    textColor: "#444",
  },
}

const initialState = {
  themeMode: <RapUIThemeMode>"darkmode",
  theme: defaultProvider,
}

type State = {
  themeMode: RapUIThemeMode
  theme: RapUITheme
}

type ActionType = {
  readonly type: typeof SET_MODE | typeof SET_THEME
  readonly payload: RapUIThemeMode
}

document.body.classList.add(initialState.themeMode)
const themeReducer: Reducer<State, ActionType> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_MODE:
      return {
        ...state,
        themeMode: action.payload,
      }
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      }
    default:
      return state
  }
}
export default themeReducer
