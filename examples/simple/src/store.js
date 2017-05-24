/* @flow */
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import { createReducer } from 'alveron'

const store = applyMiddleware(promiseMiddleware)(createStore)(
  createReducer(),
  {}
)

export default store
