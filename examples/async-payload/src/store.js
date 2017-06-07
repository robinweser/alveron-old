/* @flow */
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import { createReducer } from 'alveron'

const initialStore = {}

export default applyMiddleware(promiseMiddleware)(createStore)(
  createReducer(),
  initialStore
)
