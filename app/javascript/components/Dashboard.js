import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ClassroomsIndex from './ClassroomsIndex';
import ClassroomShow from './ClassroomShow';
import StudentShow from './StudentShow';

class Dashboard extends React.Component {
  
  render () {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ClassroomsIndex} />
          <Route exact path="/classrooms" component={ClassroomsIndex} />
          <Route exact path="/classrooms/:id" component={ClassroomShow} />
          <Route exact path="/students/:id" component={StudentShow} />
        </Switch>
      </div>
    )
  }
}

export default Dashboard 
