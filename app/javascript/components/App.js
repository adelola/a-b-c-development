import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Challenge from './Challenge';
import TransitionToChallenge from './TransitionToChallenge';
import TransitionFromChallenge from './TransitionFromChallenge';

class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path="/challenges/new" component={TransitionToChallenge} exact/>
          <Route path="/challenges/save" component={TransitionFromChallenge} exact/>
          <Route path="/students/:student_id/challenges" component={Challenge}/>
          <Route path="/" component={Dashboard} />
        </Switch>
      </Router>
    )
  }
}

export default App 
