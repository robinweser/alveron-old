/* @flow */
import { createAction } from 'redux-actions'

export default function createActions(update, payloadCreator, id) {
  return Object.keys(update).reduce((actions, name) => {
    const payload = payloadCreator[name] ? payloadCreator[name] : p => p

    actions[name] = createAction(`${id}:${name}`, payload, input => input)
    return actions
  }, {})
}
