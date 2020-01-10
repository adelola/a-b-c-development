import React, { useState } from 'react';
import Axios from 'axios';
import { withRouter, Redirect } from 'react-router-dom';

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

    <React.Fragment>
      <h1>Score: {score}</h1>
      <form onSubmit={handleSubmit}>
        <label> Additional Notes
        <textarea onChange={handleChange} />
        </label>
        <button type="submit">Submit</button> <br/>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
    </React.Fragment>
  )

};

export default withRouter(TransitionFromChallenge);