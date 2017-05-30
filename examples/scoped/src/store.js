/* @flow */
import { createStore } from 'redux'
import { createReducer } from 'alveron'

const initialStore = {}

export default createStore(createReducer(), initialStore)
