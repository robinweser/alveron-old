## Depreacted! This is the old alveron package which has been deprecated in favor of a newer version without Redux. Check out the new [alveron](https://github.com/rofrischmann/alveron) package which was once called react-woodworm.

# alveron

Alveron is a highly opinionated state architecture for React using Redux.<br>
It is heavily inspired by The Elm Architecture and aims to simplify component-based state management.

<img alt="TravisCI" src="https://travis-ci.org/rofrischmann/alveron.svg?branch=master"> <a href="https://codeclimate.com/github/rofrischmann/alveron/coverage"><img alt="Test Coverage" src="https://codeclimate.com/github/rofrischmann/alveron/badges/coverage.svg"></a> <img alt="npm downloads" src="https://img.shields.io/npm/dm/alveron.svg"> <img alt="npm version" src="https://badge.fury.io/js/alveron.svg">

## Installation
> Alveron requires `react-redux` to be installed in your project. Therefore, `react` must also be installed.

```sh
yarn add alveron react react-redux
```

## Benefits
* locally-scoped state
* plays well with third-party reducer
* single file for markup & application state
* simple & compact interface


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
// everything together and returns a React component
const Counter = createContainer({
  view,
  update,
  model
})()

// usage
<Counter />
```

## Documentation

* [Introduction](https://alveron.js.org/docs/Introduction.html)
* [Interface](https://alveron.js.org/docs/Interface.html)
* [API Reference](https://alveron.js.org/docs/API.html)

## Examples

* [Simple Counter](examples/simple)
* [Scoped Counter](examples/scoped)
* [Payload Counter](examples/payload)
* [Async Payload](examples/async-payload)

## License
Alveron is licensed under the [MIT License](http://opensource.org/licenses/MIT).<br>
Documentation is licensed under [Creative Common License](http://creativecommons.org/licenses/by/4.0/).<br>
Created with ♥ by [@rofrischmann](http://rofrischmann.de) and all the great contributors.


