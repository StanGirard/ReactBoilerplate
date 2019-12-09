import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Example from './components/example.components'
import ReactNotifications from 'react-notifications-component';

class App extends Component {
  render () {
    return (
      <Router>
        <div>
        <ReactNotifications />
          <Switch>
            <Route exact path='/' component={Example} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
