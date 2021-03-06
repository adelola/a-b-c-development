import React, { useState, useEffect, useRef } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Axios from 'axios';
import styles from '../stylesheets/components/dashboard.module.scss';
import ClassroomsIndex from './ClassroomsIndex';
import ClassroomShow from './ClassroomShow';
import StudentShow from './StudentShow';
import PageNotFound from './PageNotFound';
import SideBarClassrooms from './SideBarClassrooms';
import Student from './../images/student.svg';
import School from './../images/school.svg';
import Cubes from './../images/cubes.svg';

const Dashboard = () => {
    const [classrooms, setClassrooms] = useState([]);
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const wrapperRef = useRef(null);
    
    const fetchData = async () => {
      const result = await Axios.get(`/dashboard`);
        setClassrooms(result.data)
    };

    useEffect(() => {
      fetchData();
    },[])

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [handleToggle, menuIsOpen, setMenuIsOpen])

    const handleClickOutside = e => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target) && menuIsOpen) {
        console.log(menuIsOpen);
        setMenuIsOpen(!menuIsOpen);
      }
    }

    const handleToggle = e => {
      e.preventDefault();
      setMenuIsOpen(!menuIsOpen);
    }

    return (  
      <div className={styles.dashboard}>
        {/*Sidebar for desktop + tablet */}
        <ul className={`${styles.sidebar} hidden sm:block`}>
          <li><NavLink to="/">
            <School width={25} height={25} />Home</NavLink>
          </li>
          <li><NavLink to="/challenges/new">
            <Cubes width={25} height={25}/>Start A Challenge</NavLink></li>
            <SideBarClassrooms >
              { classrooms.map((classroom) => (
                <li key={classroom.class_id} label={classroom.class_name} classID={classroom.class_id}>
                  <ul>
                    {classroom.students.map((student) => (
                    <li key={student.student_id} classID={classroom.class_id} className={styles.studentLink}>
                      <NavLink activeClassName= {styles.activeNavLink} to={`/students/${student.student_id}`} exact>
                        <Student width={25} height={25}/>{student.student_name} 
                      </NavLink>
                    </li>
                    ))}
                  </ul>
                </li>
              ))}
            </SideBarClassrooms>
        </ul>
       
        <article className={styles.content}>
          <div className={`inline sm:hidden ${styles.offCanvasMenu}`} ref={wrapperRef} >
            <button className={`inline sm:hidden ${styles.menuToggle}`} 
                    onClick={e => handleToggle(e)} >Menu</button>
            {/*Sidebar mobile */}
            { menuIsOpen &&
                  <ul className={`${styles.mobileSideBar} inline sm:hidden`}>   
                    <li><NavLink to="/challenges/new">Start A Challenge</NavLink></li>
                    <SideBarClassrooms >
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
                    </SideBarClassrooms>
                </ul>
            }
          </div>
          {/* Content Container */}
          <Switch>
            <Route exact path="/" component={ClassroomsIndex} />  
            <Route exact path="/classrooms/:id" render={(props)=>{
                return <ClassroomShow key={props.match.params.id}/>
            }} />
            <Route exact path="/students/:id" render={(props)=>{
                return <StudentShow key={props.match.params.id}/>
            }} />
            {/* <Route path="/" component={ClassroomsIndex} /> */}
            <Route component={PageNotFound} />
          </Switch>
        </article>
      </div>
    ) 
}

export default Dashboard 
