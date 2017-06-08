# Getting Started

Alveron is a highly opinionated state architecture and therefore requires some basic setup within your project.

## Setting up your Redux store
As mentioned, Alveron uses Redux to manage the component state. Thus, it expects a Redux store to be present via React's context. We **must** wrap your application with react-redux's `<Provider>` to pass the store down.

We also need to use a special reducer wrapper which can be done using the `createReducer` API.

```javascript
import { createStore } from 'redux'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createReducer } from 'alveron'

import App from './path-to-your-root'

const store = createStore(createReducer(), { })
const mountNode = /* your root DOM node */

render((
    <Provider store={store}>
      <App>
    </Provider>
  ),
  mountNode
)
```

Once that's done, we're able to use Alveron anywhere in our application.
