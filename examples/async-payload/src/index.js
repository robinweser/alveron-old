import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import GithubStars from './components/GithubStars'

import store from './store'

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <div>
        <h1>GitHub Stargazers</h1>
        <GithubStars />
      </div>
    </Provider>,
    document.getElementById('root')
  )

render()
store.subscribe(render)
