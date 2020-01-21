import React from 'react';
import { NavLink } from 'react-router-dom';



const SideBarContent = (props) => {
    console.log(props.classId)
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
        <NavLink to={`/classrooms/${props.classId}`}>{label}</NavLink>
          <div onClick={handleClick}  style={{ float: 'left', cursor: 'pointer'  }}>
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