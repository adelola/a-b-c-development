import React from 'react';
import { Link } from 'react-router-dom';


const StudentItem = (props) => {
    
    const name = props.name;
    const id = props.id
    const handleDelete = props.handleDelete;

    return (
      <React.Fragment>
        <Link to={`/students/${id}`}>{name}</Link>
        <button type="button" onClick={handleDelete}>Delete Student</button>
      </React.Fragment>
    )
  
}

export default StudentItem