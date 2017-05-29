/* @flow */
import createActionType from './createActionType'
import objectReduce from './objectReduce'

import type { FunctionMap } from '../../types/FunctionMap'

export default function createReducer(
  update: FunctionMap,
  scope: string,
  model: any
): Function {
  const reducerMap = objectReduce(
    update,
    (reducerMap, name) => {
      reducerMap[createActionType(scope, name)] = update[name]
      return reducerMap
    },
    {}
  )

  return function reducerFunction(state, action) {
    // set the initial state
    if (!state.hasOwnProperty(scope)) {
      state[scope] = model
    }

    const reducer = reducerMap[action.type]
    if (reducer) {
      return {
        ...state,
        [scope]: reducer(state[scope], action)
      }
    }

    return state
  }
}
