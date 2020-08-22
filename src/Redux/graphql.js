import { combineReducers } from "redux"

export const GET_PROPS = "PROPS"

const initialState = {
  props: [],
}

export const queryAction = props => ({
  type: GET_PROPS,
  props,
})

const queryReducer = (state = initialState.props, action) => {
  switch (action.type) {
    case GET_PROPS:
      var copyState = state;
       copyState = action.props
      return copyState
    default:
      return state
  }
}

export default combineReducers({
  queries: queryReducer,
})
