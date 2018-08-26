import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Example from './components/example.components'


class App extends Component {
  render() {
    return (
      <Router>
          <div>
              <Switch>
                  <Route exact path='/' component={Example} />
              </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
