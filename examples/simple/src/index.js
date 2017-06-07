import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Counter from './components/Counter'

import store from './store'

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <div>
        <h1>Global Counter</h1>
        <Counter />
        <br />
        <br />
        Any instance of Counter is scoped to the same store key.
        <br />
        Therefore, adding additional Counter will also change the same state.
        <br />
        <br />
        <Counter />
        <Counter />
        <Counter />
      </div>
    </Provider>,
    document.getElementById('root')
  )

render()
store.subscribe(render)
