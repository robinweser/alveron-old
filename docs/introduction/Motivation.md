# Motivation

In fact you might now ask why not just use React's very own `setState` API. While `setState` is limited to the component scope, we can use alveron to manage global state auto-scoped to each component. Using this we can not just create one-to-one, but also many-to-one component:state relations. Also we are free to access each component's state from within another component if required.
