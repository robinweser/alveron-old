import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Counter from './components/Counter'

import store from './store'

const Counter1 = Counter('counter_1')
const Counter2 = Counter('counter_2')
const Counter3 = Counter('counter_3')
const Counter4 = Counter('counter_4')

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <div>
        <h1>Scoped Counter</h1>
        <Counter1 />
        <br />
        <br />
        Every Counter is scoped to an unique Redux store key.
        <br />
        Therefore, they all work independently and have their own state.
        <br />
        <br />
        <Counter2 />
        <Counter3 />
        <Counter4 />
      </div>
    </Provider>,
    document.getElementById('root')
  )

render()
store.subscribe(render)
