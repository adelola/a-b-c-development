import React, { useState, useEffect } from 'react';
import SideBarContent from './SideBarContent';

const SideBarClassrooms = (props) => {

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
        <div>
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

export default SideBarClassrooms