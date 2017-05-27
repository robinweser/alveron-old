# `createContainer(interface)`

Creates a fully integrated component factory injecting both the locally scoped state and all action dispatchers directly into each component's props.

## Arguments
1. `interface` (*Object*): The interface describes all required parts of the component architecture.

---
#### Interface
* **model** (*any*):<br>The model describes the initial state.
* **update** (*Function|Object*):<br>Either a single update reducer with the signature *(previousState, action) => state* or an object with (multiple) named update reducers.
* **view** (*ReactComponent*)<br>The React component which is rendered with the data.
* **payload?** (*Function|Object*)<br>Either a single payload creator function or an object with named (names must match the reducer names from update) payload creator functions. It can be used to transform the action dispatcher input or to resolve async promises such as API requests.

> Note: **model**, **update** and **view** are mandatory.


## Returns
(*Function*) A component factory with the signature *(stateKey?) => ReactComponent*. You may pass an optional stateKey to use an explicit Redux state key. If not passed it will use an anonymously generated unique key.

## Example
```javascript
import { createContainer } from 'alveron'

const model = 0

const update = {
  increase: state => state + 1,
  increaseBy: (state, { payload }) => state + payload
  decrease: state => state - 1
}

const view = ({ state, increase, increaseBy, decrease }) => (
  <div>
    <span>Counter: {state}</span>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
    <button onClick={() => increaseBy(2)}>Increase by 2</button>
  </div>
)

const Counter = createContainer({
  view,
  update,
  model
})()
```
