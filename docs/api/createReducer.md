# `createReducer([defaultReducer])`

Creates the final top-level reducer that is passed to Redux's `createStore`.<br>
It wraps the `reducerWrapper`-method which is exposed by every Paradux instance.

## Arguments
1. `defaultReducer` (*Function?*): A default reducer that gets combined with Alveron's reducer. Use this to inject third-party or other custom reducers. You may also use Redux's `combineReducers` to combine multiple default reducers.

## Returns
(*Function*) Combined top-level reducer

## Example
```javascript
import { createReducer } from 'alveron'

const customReducer = (state = { isLoaded: false }, action) {
  switch (action.type) {
    case 'PAGE_LOADING':
      return { ...state: isLoading: true }
    case 'PAGE_LOADED':
      return { ...state, isLoading: false, isLoaded: true }
    default:
     return state
  }
}

const topLevelReducer = createReducer(customReducer)
```
