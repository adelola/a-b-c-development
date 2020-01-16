import React from 'react';
import { Link } from 'react-router-dom';

const StudentItem = (props) => { 
    const name = props.name;
    const id = props.id
    const lastScore = props.lastScore
    const handleDelete = props.handleDelete;

    return (
      <React.Fragment>
        <Link to={`/students/${id}`}>{name}</Link> &nbsp; &nbsp; &nbsp;
        <span>Recent Challenge: {lastScore} &nbsp; &nbsp; &nbsp; </span>
        <button type="button" onClick={handleDelete}>Delete Student</button>
      </React.Fragment>
    )
}

export default StudentItem