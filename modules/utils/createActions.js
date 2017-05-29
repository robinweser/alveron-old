/* @flow */
import { createAction } from 'redux-actions'

import objectReduce from './objectReduce'
import createActionType from './createActionType'

import type { FunctionMap } from '../../types/FunctionMap'

const defaultPayloadCreator = payload => payload
const defaultMetaCreator = meta => meta

export default function createActions(
  update: FunctionMap,
  payloadCreator: FunctionMap,
  scope: string
): FunctionMap {
  return objectReduce(
    update,
    (actions, name) => {
      const payload = payloadCreator[name]
        ? payloadCreator[name]
        : defaultPayloadCreator

      actions[name] = createAction(
        createActionType(scope, name),
        payload,
        defaultMetaCreator
      )
      return actions
    },
    {}
  )
}
