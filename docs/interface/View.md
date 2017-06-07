# View

(*ReactComponent*)

> This is basically your Redux connected component using react-redux's `connect`-API.

The view is a simple React component that renders some markup.<br>

## Props

### State
It gets several props passed by default, including `state` which references the locally scoped Redux `state`.<br>
On initial render, this maps to the defined *[model](Model.md)*.

### Action Dispatcher
It also receives action dispatchers. These are functions that dispatch internal actions to the update reducer function(s).<br>
The view automatically updates the `state` if one of those is triggered.<br>

For each *[update reducer function](Update.md)*, a special action dispatcher is generated and passed to the view.
Depending on the shape of *[update](Update.md#update-shape)*, you either get the single `update` prop or each reducer function by its name. e.g.

#### Single reducer function
```javascript
// using a single reducer function
const update = (state, action) => [
  ...state,
  action.payload
]

// the view receives the action dispatcher as `update`
const view = ({ update, state }) => /* markup */
```

#### Object with named reducer functions
```javascript
// using multiple named reducer functions
const update = {
  increment: state => state + 1
  decrement: state => state - 1
}

// the view recievies each named action dispatcher as a single prop
const view = ({ increment, decrement, state }) => /* markup */
```

#### Payload
Every action dispatcher is able to provide a payload which is passed to the reducer function via `action.payload` as seen in the example above. This can be done by simply calling the dispatcher with a single parameter.

```javascript
const view = ({ update, state }) => (
  <div onClick={() => update('payload')} />
)
```
