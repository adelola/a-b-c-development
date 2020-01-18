import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';
import styles from '../stylesheets/components/dashboard';
import SideBarContent from './SideBarContent';


const SideBar = () => {

    const [state, setState] = useState({});
    const fetchData = async () => {
        const result = await Axios.get(`/api/classrooms/${classID}/students`);
          console.log(...result.data)
      };
    
    useEffect(() => {

    }, [])


    return(
        <React.Fragment>
            <aside  className={styles.sidebar}>
                <NavLink activeClassName= {styles.activeNavLink} to="/" exact>Home</NavLink><br/>
                <NavLink to="/challenges/new">Start A Challenge</NavLink>
            </aside>
      </React.Fragment>
    )


}

export default SideBar