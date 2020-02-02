import React, { useState, useEffect} from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Axios from 'axios';
import styles from '../stylesheets/components/dashboard';
import ClassroomsIndex from './ClassroomsIndex';
import ClassroomShow from './ClassroomShow';
import StudentShow from './StudentShow';
import PageNotFound from './PageNotFound';
import SideBar from './SideBar.js';

const Dashboard = () => {

    const [classrooms, setClassrooms] = useState([]);

    const fetchData = async () => {
      const result = await Axios.get(`/dashboard`);
        setClassrooms(result.data)
    };

    useEffect(() => {
      fetchData();
    },[])

    return (  

      <div className={styles.dashboard}>
        <ul className="hidden sm:block">
        <li><NavLink to="/" exact>Home</NavLink> </li>
        <li><NavLink to="/challenges/new">Start A Challenge</NavLink></li>
          <SideBar >
            { classrooms.map((classroom) => (
              <li key={classroom.class_id} label={classroom.class_name} classID={classroom.class_id}>
                <ul>
                  {classroom.students.map((student) => (
                  <li key={student.student_id} classID={classroom.class_id}>
                    <NavLink activeClassName= {styles.activeNavLink} to={`/students/${student.student_id}`} exact>
                      {student.student_name} 
                    </NavLink>
                  </li>
                  ))}
                </ul>
              </li>
            ))}
          </SideBar>
        </ul>

        <article className={styles.content}>  
          <Switch>
            <Route exact path="/" component={ClassroomsIndex} />
            <Route exact path="/classrooms" component={ClassroomsIndex} />  
            <Route  path="/classrooms/:id" render={(props)=>{
                return <ClassroomShow key={props.match.params.id}/>
            }} />
            <Route  path="/students/:id" render={(props)=>{
                return <StudentShow key={props.match.params.id}/>
            }} />
            <Route component={PageNotFound} />
          </Switch>
        </article>
      </div>
    )
  
}

export default Dashboard 
