import React, { Component } from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { View as Index } from '../pages/index/index.js'
import { View as List } from '../pages/list/index.js'
import { Provider } from 'react-redux'
import store from '../store/store.js'
import { syncHistoryWithStore } from 'react-router-redux'
import { View as Detail } from '../pages/detail/index.js'
import 'antd/dist/antd.css';
import { View as commonWrapper } from '../common/header/index.js'

const history = syncHistoryWithStore(browserHistory, store)

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path='/' component={commonWrapper}>
            <IndexRoute component={Index}></IndexRoute>
            <Route path='list/:id' component={List}></Route>
            <Route path='detail/:id' component={Detail}></Route>
          </Route>
        </Router>
      </Provider>
    )
  }
}