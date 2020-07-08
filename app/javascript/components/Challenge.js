import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useChallengeHooks } from './forms/ChallengeHooks';
import styles from '../stylesheets/components/challenge.module.scss';
import RadioButton from './forms/RadioButton';
import Correct from './../images/verification.svg';
import Total from './../images/cubes.svg';
import Next from './../images/next.svg';

const Challenge = (props) => {
    
  const classroomId = props.location.state.classroom;
  const studentId = props.location.state.student;
  const challengeType = props.location.state.type;

  // const classroomId = props.classroom
  // const studentId = props.student
  // const challengeType = props.type

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
    // setCollection(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"])
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
    let currentScore = Math.round(currentCorrect/currentAttempted * 100)
    setScore(currentScore)
  }}

  useEffect(() => {
    calculateTally()
  }, [inputs])

  return (
    <div className={styles.challengePage}>
      <div className={styles.background}>
        <div className={styles.header}>
          <p><Correct width={20} height={20} /> Correct: {correct} / Total: {attempted} <Total width={20} height={20}/></p>
          {/* <p>{score || 0}%</p> */}
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <span className={styles.challengeWrapper}>
              {collection.map((node) => {
                return(
                  <div key={node} className={styles.radios}>
                    <RadioButton  letter={node} handleInputChange={handleInputChange} /> <br/>
                  </div>
                )})
              }
            
            <button className={`${styles.challengeButton}`} type="submit">Next<Next height={25} width={25}/></button>
            </span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Challenge)
