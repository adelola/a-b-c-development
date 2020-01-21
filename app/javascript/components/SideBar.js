import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import styles from '../stylesheets/components/dashboard';
import SideBarContent from './SideBarContent';


const SideBar = (props) => {

    const [state, setState] = useState({});
    const [openSections, setOpenSections] = useState({});
    
    useEffect(() => {
        props.children.forEach(child => {
            if (child.props.isOpen) {
              setOpenSections({...openSections, [child.props.label] : true});
            }
          });
          setState(openSections);
    }, [handleClick])

    const handleClick = (label) =>{
        const isOpen = !!openSections[label];
        setOpenSections({...openSections, [label]: !isOpen })
        setState({ openSections: {...openSections } }); 
    }

    // <aside  className={styles.sidebar}>
    //     <NavLink activeClassName= {styles.activeNavLink} to="/" exact>Home</NavLink><br/>
    //     <NavLink to="/challenges/new">Start A Challenge</NavLink>
    // </aside> 

    return(
      <React.Fragment>
        <div style={{ border: '2px solid #008f68' }}>
        {props.children.map( child => (
          <SideBarContent
            key={child.props.classId}
            classId={child.props.classId}
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