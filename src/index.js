import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import store from './store.js'
import { Provider } from 'react-redux'
import { saveState } from './functions/example.localStorage'
import throttle from 'lodash/throttle'
const time = 1000

const storeCreation = store()

storeCreation.subscribe(throttle(() => {
  saveState({
    example: storeCreation.getState().example
  })
}, time))

ReactDOM.render(
  <Provider store={storeCreation}>
    <App />
  </Provider>, document.getElementById('root'))
registerServiceWorker()
