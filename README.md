# alveron

> WIP

Alveron is a highly opinionated state architecture for React using Redux.<br>
It is inspired by The Elm Architecture and aims to simplify component-based state management.

<img alt="TravisCI" src="https://travis-ci.org/rofrischmann/alveron.svg?branch=master"> <a href="https://codeclimate.com/github/rofrischmann/alveron/coverage"><img alt="Test Coverage" src="https://codeclimate.com/github/rofrischmann/alveron/badges/coverage.svg"></a> <img alt="npm downloads" src="https://img.shields.io/npm/dm/alveron.svg"><img alt="npm version" src="https://badge.fury.io/js/alveron.svg">

## Why?
In fact you might now ask why not just use React's very own `setState` API. While `setState` is limited to the component scope, we can use alveron to manage global state auto-scoped to each component. Using this we can not just create one-to-one, but also many-to-one component:state relations. Also we are free to access each component's state from within another component if required.

## Installation
> Alveron requires `react-redux` to be installed in your project.

```sh
yarn add alveron react-redux
```

## The Gist
```javascript
import { createContainer } from 'alveron'

// the initial state
const model = 0

// the reducer functions
const update = {
  increase: state => state + 1,
  decrease: state => state - 1
}

// a functional component which gets both the state
// and the action dispatcher passed via props
const view = ({ state, increase, decrease }) => (
  <div>
    <span>Counter: {state}</span>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
  </div>
)

// the single higher-order function that links
// everything together
const Counter = createContainer({
  view,
  update,
  model
})()

// usage
<Counter />
```

## Documentation

> Coming soon

## Examples
**[Simple Example](examples/simple/vanilla)**<br>
A simple example that includes 3 components:
1. SingleCounter (many-to-one)
2. ReusableCounter (one-to-one)
3. GithubStars (async with payloadCreator)


## Support
We highly appreciate any contribution.<br>
We also love to get feedback.

## License
Alveron is licensed under the [MIT License](http://opensource.org/licenses/MIT).<br>
Documentation is licensed under [Creative Common License](http://creativecommons.org/licenses/by/4.0/).<br>
Created with ♥ by [@rofrischmann](http://rofrischmann.de) and all the great contributors.
