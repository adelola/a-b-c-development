import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './../stylesheets/components/sidebarcontents.module.scss';
import TeachIcon from './../images/teacher.svg';
import UpArrow from './../images/arrow_up.svg';
import DownArrow from './../images/arrow_down.svg';

const SideBarContent = (props) => {

    const label = props.label
    const isOpen = props.isOpen
    const handleClick = () => {
         props.onClick(label);
    }
  
    return (
    <div className={styles.wrapper} style={{background: isOpen ? '#132B44' : '#132B44'}}>
      <div className={styles.sideBarRow}>
        <NavLink activeClassName= {styles.activeNavLink} to={`/classrooms/${props.classID}`} exact>
          <TeachIcon height={25} width={25}/>{label}</NavLink>
        <div onClick={handleClick}  className={styles.icon}>
          {!isOpen && <span className={styles.iconClosed}><UpArrow width={30} height={30} /></span>} {/*arrow up */}
          {isOpen && <span className={styles.iconOpen}><DownArrow width={30} height={30} /></span>} {/*arrow down */}
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