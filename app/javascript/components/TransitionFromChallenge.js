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
  const [charCount, setCharCount] = useState(0);

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
    setCharCount(event.target.value.split('').length)
  }

  const handleCancel = () => {
    if (confirm('Leave now and your data will not be saved. Proceed?')){
      props.history.push({pathname: `/students/${studentId}`});
    }
  }
  
  return (

    <div className={styles.transitionFrom}>
      <form className={styles.fromForm} onSubmit={handleSubmit}>
        <h1>Score: {score || 0}</h1>
        <label>Notes: <br/>
          <textarea placeholder="Any notes on this performance?" onChange={handleChange} maxlength="180"/><br/>
        </label>
        <p className={styles.wordCount}>{charCount}/180 characters</p> 
        <span className={styles.buttonFields}>
          <button type="button" onClick={handleCancel}>Cancel</button>
          <button type="submit">Submit</button> 
        </span>
      </form>
    </div>
  )

};

export default withRouter(TransitionFromChallenge);