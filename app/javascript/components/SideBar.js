import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';
import styles from '../stylesheets/components/dashboard';
import SideBarContent from './SideBarContent';


const SideBar = (props) => {

    const [state, setState] = useState({});
    const [navlinks, setNavlinks] = useState([]);
    const openSections = {};

    // const fetchData = async () => {
    //     const result = await Axios.get(`/api/classrooms/${classID}/students`);
    //       console.log(...result.data)
    //   };
    
    useEffect(() => {
        props.children.props.children.forEach(child => {
            if (child.props.isOpen) {
              openSections[child.props.label] = true;
            }
          });
        setState({ openSections });

    }, [])

    const handleClick = (label) =>{
        // const { props: { allowMultipleOpen }, state: { openSections } } = this;
        const isOpen = !!openSections[label];
        setState({
        openSections: {
            [label]: !isOpen
        }
        });
       
    }

    // <aside  className={styles.sidebar}>
    //     <NavLink activeClassName= {styles.activeNavLink} to="/" exact>Home</NavLink><br/>
    //     <NavLink to="/challenges/new">Start A Challenge</NavLink>
    // </aside> 

    return(
      <React.Fragment>
        <div style={{ border: '2px solid #008f68' }}>
        {props.children.props.children.map(child => (
          <SideBarContent
            isOpen={!!openSections[child.props.label]}
            label={child.props.label}
            onClick={handleClick}
          >            
            {child.props.children}
          </SideBarContent>
        ))}
        </div>
        
      </React.Fragment>
    )


}

export default SideBar