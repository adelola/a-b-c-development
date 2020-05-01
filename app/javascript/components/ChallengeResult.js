import React from 'react';
import Axios from 'axios';
import DisplayLetters from './DisplayLetters';
import styles from './../stylesheets/components/challengeresult'

const ChallengeResult = (props) => {
  const blueColorValue = props.blueColorValue
  const challenge = props.challenge
  const correctLetters = props.correct
  const incorrectLetters = props.incorrect
  const studentId = props.student
  const classroomId = props.classroom

  return (
    <div className={styles.challengeResult} style={{background: `linear-gradient(rgb(252, 106, ${blueColorValue}), rgb(238, 168, 73))`}}>
      <div className={styles.challengeStats}>
        <p>Score: {challenge.score}</p>
        <p>Date: {challenge.date}</p>
        <p>Type: {challenge.case_type}</p>
      </div>
      <div className={styles.answers}>
        <DisplayLetters name="Correct Answers" answers={correctLetters} />
        <DisplayLetters name="Incorrect Answers" answers={incorrectLetters}/>
      </div>
      <div className={styles.note}>
        { challenge.note.length > 0 &&
        <p>Note: {challenge.note}</p>
        }
      </div>
    </div>
  )

}

export default ChallengeResult