# Model

(*any*)

> This is basically your Redux initial state.

The model describes how our data looks like. Rather, it describes how the initial state should look like.<br>
It can be anything - a single number or a complex object.

### Example

```javascript
// simple primitive state
const model = 0

// complex object state
const model = {
  firstname: '',
  lastname: '',
  isLoggedIn: false,
  status: 'free'
}
```
