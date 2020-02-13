import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useChallengeHooks } from './forms/ChallengeHooks';
import styles from '../stylesheets/components/challenge';
import RadioButton from './forms/RadioButton';

const Challenge = (props) => {
    
  // const classroomId = props.location.state.classroom;
  // const studentId = props.location.state.student;
  // const challengeType = props.location.state.type;
  const classroomId = props.classroom;
  const studentId = props.student;
  const challengeType = props.type;


  const [collection, setCollection] = useState([]);
  const [score, setScore] = useState(0)
  const [attempted, setAttempted] = useState(0)
  const [correct, setCorrect] = useState(0) 

  const onCreate = () => {
    props.history.push({
      pathname: "/challenges/save",
      state: { score: score, type: challengeType, classroom: classroomId, student: studentId, collection: inputs }
    });  
  };

  const { inputs, handleInputChange, handleSubmit } = useChallengeHooks(onCreate);
 
  useEffect(() => {
    // setCollection([...props.location.state.collection])
    setCollection(["A","B","C","D","E","F","G","H","I","J","K","L","M","O","P","Q","R","S","T","U","V","W","X","Y","Z"])


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
    let currentScore = Math.round(currentCorrect/currentAttempted * 100)
    setScore(currentScore)
  }}

  useEffect(() => {
    calculateTally()
  }, [inputs])

  return (
    <div className={styles.challengePage}>
      <h1>Challenge</h1>
      <p>Correct: {correct} / Total: {attempted} </p>
      <p>{score}</p>
      <div >
        <form className={styles.challengeWrapper} onSubmit={handleSubmit}>
        {collection.map((node) => {
          return(
            <div key={node} className={styles.radios}>
              <RadioButton  letter={node} handleInputChange={handleInputChange} /> <br/>
            </div>
          )})
        }
        <button type="submit">Next</button>
      </form>
      </div>
    </div>
  )
}

export default withRouter(Challenge)
