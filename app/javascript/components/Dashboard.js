import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from '../stylesheets/components/dashboard'
import ClassroomsIndex from './ClassroomsIndex';
import ClassroomShow from './ClassroomShow';
import StudentShow from './StudentShow';

class Dashboard extends React.Component {
  
  render () {
    return (
      <div className={styles.dashboard}>
        <aside className={styles.sidebar}>
          <h1>Sidebar</h1>
          Classrooms
        </aside>
        <article className={styles.content}>
          <Switch>
            <Route exact path="/" component={ClassroomsIndex} />
            <Route exact path="/classrooms" component={ClassroomsIndex} />
            <Route exact path="/classrooms/:id" component={ClassroomShow} />
            <Route exact path="/students/:id" component={StudentShow} />
          </Switch>
        </article>
      </div>
    )
  }
}

export default Dashboard 
