/* @flow */
import type { FunctionMap } from '../../types/FunctionMap'

export default function createFunctionMap(input: FunctionMap | Function) {
  if (typeof input === 'function') {
    return { action: input }
  }

  return input
}
