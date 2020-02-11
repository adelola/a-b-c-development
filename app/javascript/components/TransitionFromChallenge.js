import React, { useState } from 'react';
import Axios from 'axios';
import { withRouter, Redirect } from 'react-router-dom';
import styles from './../stylesheets/components/transitionfrom'

const TransitionFromChallenge = (props) => {
  
  const classroomId = props.location.state.classroom;
  const studentId = props.location.state.student;
  const inputs = props.location.state.collection;
  const score = props.location.state.score;
  const challengeType = props.location.state.type;
  const [note, setNote] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault()
    const postData = async () => {
        const result = await Axios.post(`/api/classrooms/${classroomId}/students/${studentId}/challenges`, {challenge:{collection:{...inputs}, score: score, type: challengeType, note: note}});
        props.history.push({pathname: `/students/${result.data.response}`});  
      };
    postData();
  };

  const handleChange = event => {
    event.preventDefault();
    setNote(event.target.value)
  }

  const handleCancel = () => {
    if (confirm('Leave now and your data will not be saved. Proceed?')){
      props.history.push({pathname: `/students/${studentId}`});
    }
  }
  
  return (

    <div className={styles.transitionFrom}>
      <form className={styles.fromForm} onSubmit={handleSubmit}>
        <h1>Score: {score}</h1>
        <label>Notes: <br/>
        <textarea onChange={handleChange} /><br/>
        </label>
        <button type="button" onClick={handleCancel}>Cancel</button>&nbsp;
        <button type="submit">Submit</button> 
      </form>
    </div>
  )

};

export default withRouter(TransitionFromChallenge);