/* @flow */
import type { FunctionMap } from './FunctionMap'

export type Interface = {
  view: Function,
  model: any,
  update: FunctionMap | Function,
  payload?: FunctionMap | Function
}
