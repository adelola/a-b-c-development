import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './../stylesheets/components/sidebarcontents';

const SideBarContent = (props) => {

    const label = props.label
    const isOpen = props.isOpen
    const handleClick = () => {
         props.onClick(label);
    }
  
    return (
    <div className={styles.wrapper} style={{background: isOpen ? '#98D6C6' : '#A2E5D4'}}>
      <div className={styles.sideBarRow}>
        <NavLink activeClassName= {styles.activeNavLink} to={`/classrooms/${props.classID}`} exact>{label}</NavLink>
        <div onClick={handleClick}  className={styles.icon}>
          {!isOpen && <span className={styles.iconClosed}>&#9650;</span>} {/*arrow up */}
          {isOpen && <span className={styles.iconOpen}>&#9660;</span>} {/*arrow down */}
        </div>
      </div>
      {isOpen && (
        <div className={styles.studentNames}> 
          {props.children}
        </div>
      )}
    </div>
    )
}

export default SideBarContent