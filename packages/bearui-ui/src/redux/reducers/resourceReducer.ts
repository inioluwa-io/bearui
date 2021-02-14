import { FETCH_SUCCESS, FETCH_END, FETCH_FAILED } from "../types"
import { ResourceState } from "../../types"
import { Reducer } from "react"

const initialState = {
  resource: <ResourceState>{},
}

type State = {
  resource: ResourceState
}

type ActionType = {
  readonly type: typeof FETCH_SUCCESS | typeof FETCH_END | typeof FETCH_FAILED
  readonly payload: ResourceState
}

const resourceReducer: Reducer<State, ActionType> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        resource: {...state.resource, ...action.payload},
      }
    default:
      return state
  }
}
export default resourceReducer
