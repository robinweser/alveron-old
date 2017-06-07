/* @flow */
import objectReduce from './objectReduce'

import type { FunctionMap } from '../../types/FunctionMap'

export default function createDispatchers(
  dispatch: Function,
  actions: FunctionMap
): FunctionMap {
  return objectReduce(
    actions,
    (dispatcher, action, name) => {
      dispatcher[name] = payload => dispatch(action(payload))
      return dispatcher
    },
    {}
  )
}
