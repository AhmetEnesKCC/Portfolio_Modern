import { GET_PROPS } from "./graphql"
import React from "react"
import { applyMiddleware, compose, createStore } from "redux"
import thunk from "redux-thunk"
import reducers from "./graphql"
import { Provider } from "react-redux"

const middleWare = [thunk]
const store = () => createStore(reducers, applyMiddleware(...middleWare))

export default ({ element }) => {
  return <Provider store={store()}>{element}</Provider>
}
