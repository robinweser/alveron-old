/* @flow */
export default function createReducer(update, id, model) {
  return function reducerFunction(state, action) {
    if (!state.hasOwnProperty(id)) {
      state[id] = model
    }

    for (const name in update) {
      if (action.type === `${id}:${name}`) {
        return {
          ...state,
          [id]: update[name](state[id], action)
        }
      }
    }

    return state
  }
}
