import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useChallengeHooks } from './forms/ChallengeHooks';
import styles from '../stylesheets/components/challenge';
import RadioButton from './forms/RadioButton';

const Challenge = (props) => {
    
  const classroomId = props.location.state.classroom;
  const studentId = props.location.state.student;
  const challengeType = props.location.state.type;
  const [collection, setCollection] = useState([]);
  // const [letter, setLetter] = useState({letter: "", status:"" });
  const [score, setScore] = useState(0)
  const [attempted, setAttempted] = useState(0)
  const [correct, setCorrect] = useState(0) 

  const onCreate = () => {
    props.history.push({
      pathname: "/challenges/save",
      state: { score: 99.8, type: challengeType, classroom: classroomId, student: studentId, collection: inputs }
    });  
  };

  const { inputs, handleInputChange, handleSubmit } = useChallengeHooks(onCreate);
 
  useEffect(() => {
    setCollection([...props.location.state.collection])
  }, [])

  const calculateTally = () => {
    let currentAttempted = 0
    let currentCorrect = 0
    if (Object.keys(inputs).length > 0 ){
    for (let [key, value] of Object.entries(inputs)) {
        if (value === "correct"){
          currentAttempted++
          currentCorrect++
        } else if (value=== "incorrect"){
          currentAttempted++
        }      
    }
    setAttempted(currentAttempted)
    setCorrect(currentCorrect)
  }}

  useEffect(() => {
    calculateTally()
  }, [inputs])

  return (
    <div className={styles.challenge}>
      <h1> Challenge</h1>
      <p>Correct: {correct} / Total: {attempted} </p>
      <form onSubmit={handleSubmit}>
      {collection.map((node) => {
        return(
          <div key={node} className={styles.radios}>
            <RadioButton letter={node} handleInputChange={handleInputChange} /> <br/>
          </div>
        )})
      }
        <button type="submit">Next</button>
      </form>
      
    </div>
  )
}

export default withRouter(Challenge)
