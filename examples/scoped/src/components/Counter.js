/* @flow */
import React from 'react'
import { createContainer } from 'alveron'

const model = 0

const update = {
  increase: state => state + 1,
  decrease: state => state - 1
}

const view = ({ state, scope, increase, decrease }) => (
  <div>
    <span>Counter {scope}: {state}</span>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
  </div>
)

export default createContainer({
  view,
  update,
  model
})
