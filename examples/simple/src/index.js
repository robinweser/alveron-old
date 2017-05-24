import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import SingleCounter from './components/SingleCounter'
import ReuseableCounter from './components/ReuseableCounter'
import GithubStars from './components/GithubStars'

import store from './store'

const Counter1 = ReuseableCounter('c1')
const Counter2 = ReuseableCounter('c2')

const Header = props => (
  <div style={{ fontSize: 20, fontWeight: 600 }}>{props.children}</div>
)

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <div>
        <div>
          <Header>Single Counter:</Header>
          <br />
          <SingleCounter />
          <br />
          See how the state is global:
          <SingleCounter />
          <SingleCounter />
          <SingleCounter />
        </div>
        <br />
        <br />
        <div>
          <Header>Reuseable Counter:</Header><br />
          <Counter1 />
          <Counter2 />
        </div>
        <br />
        <div>
          <Header>Github Stars:</Header>
          <br />
          <GithubStars />
        </div>
      </div>
    </Provider>,
    document.getElementById('root')
  )

render()
store.subscribe(render)
