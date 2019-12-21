import React, { useState } from 'react';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';

const TransitionFromChallenge = (props) => {
  console.log(props);
  
  const classroomId = props.location.state.classroom;
  const studentId = props.location.state.student;
  const inputs = props.location.state.collection;
  const score = props.location.state.score;
  const challengeType = props.location.state.type;
  const [state, setState] = useState(false);
  const [note, setNote] = useState("");

  const handleSubmit = () => {
    const postData = async () => {
        const result = await Axios.post(`/api/classrooms/${classroomId}/students/${studentId}/challenges`, {challenge:{collection:{...inputs}, score: score, type: challengeType, note: note}});
        console.log(result.data);
    };
    postData();
    setState(true);
    props.history.push({pathname: `/students/${studentId}`});
  };

  const handleChange = (event) => {
    event.preventDefault();
    setNote(event.target.value)
  }

  const handleCancel = () => {
    alert('Leave now and your data will not be saved. Proceed?');
    props.history.push({pathname: `/students/${studentId}`});
  }
  
  return (

    <React.Fragment>
      <form onSubmit = {handleSubmit}>
        <label> Additional Notes
        <textarea onChange={handleChange} />
        </label>
        <button type="submit">Submit</button> <br/>
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </React.Fragment>
  )

};

export default withRouter(TransitionFromChallenge);