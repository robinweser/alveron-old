/* @flow */
import React from 'react'
import { createContainer } from 'alveron'

const model = 0

const update = {
  increaseBy: (state, action) => state + action.payload,
  decreaseBy: (state, action) => state - action.payload
}

const view = ({ state, scope, factor, increase, decrease }) => (
  <div>
    <span>Counter {scope}: {state}</span>
    <button onClick={() => increaseBy(factor)}>Increase by {factor}</button>
    <button onClick={() => descreaseBy(factor)}>Decrease by {factor}</button>
  </div>
)

export default createContainer({
  view,
  update,
  model
})
