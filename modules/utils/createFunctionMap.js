/* @flow */
import type { FunctionMap } from '../../types/FunctionMap'

export default function createFunctionMap(
  input: FunctionMap | Function | Object
) {
  if (typeof input === 'function') {
    return { update: input }
  }

  return input
}
