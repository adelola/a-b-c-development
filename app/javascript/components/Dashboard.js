import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import styles from '../stylesheets/components/dashboard';
import ClassroomsIndex from './ClassroomsIndex';
import ClassroomShow from './ClassroomShow';
import StudentShow from './StudentShow';
import PageNotFound from './PageNotFound';
import SideBar from './SideBar.js';

const Dashboard = () => {
  
  
    return (
      <div className={styles.dashboard}>
        <SideBar allowMultipleOpen>
          <div label='Classrooms' isOpen>
            <p>
              <strong>Common Room</strong> 
            </p>
            <p>
              <strong>Pensive Room</strong> 
            </p>
            <p>
              <strong>Endangered Room</strong> 
            </p>
            {/* { classrooms.map((class) => {
              <div label={classroom.name}><NavLink to={`/classrooms/${classroom.id}`}>{classroom.name}</NavLink></div>
            })} */}
          </div>
        </SideBar>

        <article className={styles.content}>
          <Switch>
            <Route exact path="/" component={ClassroomsIndex} />
            <Route exact path="/classrooms" component={ClassroomsIndex} />
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

export default Dashboard 
