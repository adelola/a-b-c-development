import React from 'react';
import { Link } from 'react-router-dom';
import styles from './../stylesheets/components/studentitem'; 


const StudentItem = (props) => { 
    const name = props.name;
    const id = props.id
    const lastScore = props.lastScore
    const handleDelete = props.handleDelete;

    return (
      <div className={styles.item}>
        {/* <Link to={`/students/${id}`}>{name}</Link> &nbsp; &nbsp; &nbsp; */}
        <h1>{name}</h1>
        <span>Recent Challenge: {lastScore} &nbsp; &nbsp; &nbsp; </span>
        <button type="button" onClick={handleDelete}>Delete Student</button>
        <button>Start A Challenge</button>
      </div>
    )
}

export default StudentItem