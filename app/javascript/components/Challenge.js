import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';
import { useChallengeHooks } from './forms/ChallengeHooks';
import styles from '../stylesheets/components/challenge';
import RadioButton from './forms/RadioButton';

const Challenge = (props) => {
    
  const classroomId = props.location.state.classroom;
  const studentId = props.location.state.student;
  const challengeType = props.location.state.type;
  const [collection, setCollection] = useState([]);
  const [letter, setLetter] = useState({letter: "", status:"" });

  useEffect(() => {
    setCollection([...props.location.state.collection])
  }, [])
  
  const onCreate = () => {
    props.history.push({
      pathname: "/challenges/save",
      state: { score: 99.8, type: challengeType, classroom: classroomId, student: studentId, collection: inputs }
    });
    
  };

  const { inputs, handleInputChange, handleSubmit } = useChallengeHooks(onCreate);

  return (
    <div className={styles.challenge}>
      <h1> Challenge</h1>
      <form onSubmit={handleSubmit}>
      {collection.map((node) => {
        return(
          <div key={node} className={styles.radios}>
            <RadioButton letter={node} action={handleInputChange} /> <br/>
          </div>
        )})
      }
        <button type="submit">Next</button>
      </form>
      
    </div>
  )
}

export default withRouter(Challenge)
