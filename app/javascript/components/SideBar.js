import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import styles from '../stylesheets/components/dashboard';
import SideBarContent from './SideBarContent';


const SideBar = (props) => {

    const [state, setState] = useState({});
    const [openSections, setOpenSections] = useState({});
    
    const handleClick = (label) =>{
        const isOpen = !!openSections[label];
        setOpenSections({...openSections, [label]: !isOpen })
        setState({ openSections: {...openSections } }); 
    }

    useEffect(() => {
        props.children.forEach(child => {
            if (child.props.isOpen) {
              setOpenSections({...openSections, [child.props.label] : true});
            }
          });
          setState(openSections);
    }, [handleClick])
    
    return(
      <React.Fragment>
        <div style={{ border: '2px solid #008f68' }}>
        {props.children.map( child => (
          <SideBarContent
            key={child.props.classID}
            classID={child.props.classID}
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