import React from 'react';
import { Link } from 'react-router-dom';

const ClassroomItem = (props) => { 
    const name = props.name;
    const id = props.id
    const handleDelete = props.handleDelete;

    return (
      <React.Fragment>
        <Link to={`/classrooms/${id}`}>{name}</Link> &nbsp;
        <button type="button" onClick={handleDelete}>Delete Classroom</button>
      </React.Fragment>
    )
}

export default ClassroomItem