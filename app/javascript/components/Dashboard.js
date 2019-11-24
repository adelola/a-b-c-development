import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import styles from '../stylesheets/components/dashboard';
import ClassroomsIndex from './ClassroomsIndex';
import ClassroomShow from './ClassroomShow';
import StudentShow from './StudentShow';
import PageNotFound from './PageNotFound';

class Dashboard extends React.Component {
  
  render () {
    return (
      <div className={styles.dashboard}>
        <aside  className={styles.sidebar}>
          <NavLink activeClassName= {styles.activeNavLink} to="/" exact>Home</NavLink><br/>
          <NavLink to="/challenges">Start A Challenge</NavLink>
        </aside>
        <article className={styles.content}>
          <Switch>
            <Route exact path="/" component={ClassroomsIndex} />
            <Route path="/classrooms" component={ClassroomsIndex} />
            <Route path="/classrooms/:id" component={ClassroomShow} />
            <Route path="/students/:id" render={()=>{
                return <StudentShow text="word" />
            }} />
            <Route component={PageNotFound} />
          </Switch>
        </article>
      </div>
    )
  }
}

export default Dashboard 
