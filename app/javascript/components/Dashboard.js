import React, { useState, useEffect} from 'react';
import Axios from 'axios';
import { Route, Switch, NavLink } from 'react-router-dom';
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
        <ul>
        <SideBar>
        { classrooms.map((classroom) => (
          <li key={classroom.class_id} label={classroom.class_name} classId={classroom.class_id}>
            <ul>
              {classroom.students.map((student) => (
              <li key={student.student_id} classId={classroom.class_id} studentId={student.student_id}>{student.student_name} </li>
              ))}
            </ul>
          </li>
        ))
        }
   
        </SideBar>
        </ul>

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
