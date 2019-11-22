import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Challenge from './Challenge'

class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Dashboard} />  
          <Route path="/challenges" component={Challenge} />
        </Switch>
      </Router>
    )
  }
}

export default App 
