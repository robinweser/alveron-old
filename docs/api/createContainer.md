# `createContainer(interface)`

Creates a fully integrated component factory injecting both the locally scoped state and all action dispatchers directly into each component's props.

## [Interface](../Interface.md)
The interface describes all required parts of the component architecture.

* **model** (*any*):<br>The model describes the initial state.
* **update** (*Function|Object*):<br>Either a single update reducer with the signature *(previousState, action) => state* or an object with (multiple) named update reducers.
* **view** (*ReactComponent*)<br>The React component which is rendered with the data. It gets the (scoped) state, the scope key and all action dispatcher passed via props.
* **payload?** (*Function|Object*)<br>Either a single payload creator function or an object with named (names must match the reducer names from update) payload creator functions. It can be used to transform the action dispatcher input or to resolve async promises such as API requests. It's signature must me *payload => payload*
* **mapState?** (*Function*)<br>An optional function to replace the default `mapStateToProps` which is passed to react-redux's `connect`. It's signature is *(scopedState, state) => Object* where *scopedState* is the locally scoped state.

> Note: **model**, **update** and **view** are mandatory.


## Returns
(*Function*) A component factory with the signature *(scope?) => ReactComponent*. You may pass an optional scope to use an explicit scoped Redux state key. If not passed it will use an anonymously generated unique key.

## Example
```javascript
import { createContainer } from 'alveron'

const model = 0

const update = {
  increase: state => state + 1,
  decrease: state => state - 1
}

const view = ({ state, increase, decrease }) => (
  <div>
    <span>Counter: {state}</span>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
  </div>
)

const Counter = createContainer({
  view,
  update,
  model
})()
```
