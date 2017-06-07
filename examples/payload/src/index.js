import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Counter from './components/Counter'

import store from './store'

const Counter1 = Counter('counter_1')
const Counter2 = Counter('counter_2')
const Counter3 = Counter('counter_3')

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <div>
        <h1>Scoped Counter with Payload</h1>
        <Counter1 factor={1} />
        <Counter2 factor={2} />
        <Counter3 factor={3} />
      </div>
    </Provider>,
    document.getElementById('root')
  )

render()
store.subscribe(render)
