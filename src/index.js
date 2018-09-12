import React from 'react'
import ReactDOM from 'react-dom'
import Router from './router'
import {Provider} from 'react-redux'
import ConfigStore from './redux/store/configStore'
import registerServiceWorker from './registerServiceWorker'

const store = ConfigStore()

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root'))

registerServiceWorker();
