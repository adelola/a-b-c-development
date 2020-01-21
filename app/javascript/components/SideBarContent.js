import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../stylesheets/components/dashboard';




const SideBarContent = (props) => {
    const label = props.label
    const isOpen = props.isOpen

    const handleClick = () => {
         props.onClick(label)
    }
  
    return (
    <div
        style={{
          background: isOpen ? '#6db65b' : '#6db65b',
          padding: '5px 10px',
        }}
      >
        <div >
        <NavLink activeClassName= {styles.activeNavLink} to={`/classrooms/${props.classID}`} exact>{label}</NavLink>
          <div onClick={handleClick}  style={{ float: 'right', cursor: 'pointer'  }}>
            {!isOpen && <span>&#9650;</span>}
            {isOpen && <span>&#9660;</span>}
          </div>
        </div>
        {isOpen && (
          <div
            style={{
              background: '#6db65b',
              marginTop: 5,
              padding: '10px 10px',
            }}
          > 
            {props.children}
          </div>
        )}
      </div>
    )
}

export default SideBarContent