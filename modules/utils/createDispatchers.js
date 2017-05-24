/* @flow */
export default function createDispatchers(dispatch, actions) {
  return Object.keys(actions).reduce((dispatcher, action) => {
    dispatcher[action] = payload => dispatch(actions[action](payload))
    return dispatcher
  }, {})
}
