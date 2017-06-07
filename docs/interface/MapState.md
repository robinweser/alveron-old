# MapState

(*Function*)

We may optionally pass a `mapState`-function to customize how the *state* is passed to the [view](View.md).<br>

It's signature is *(scopedState, globalState) => Object* where *scopedState* is the scoped Redux state which is passed as `state` by default. *globalState* describes the complete Redux store and can be used to include other state parts that are not directly consumed by the component.

### Example
```javascript
const mapState = (scopedState, globalState) => ({
  state: scopedState,
  currentUser: globalState.user
})
```
