import React from 'react';
import Axios from 'axios';
import DisplayLetters from './DisplayLetters';
import styles from './../stylesheets/components/challengeresult'

const ChallengeResult = (props) => {
  const challenge = props.challenge
  const correctLetters = props.correct
  const incorrectLetters = props.incorrect
  const studentId = props.student
  const classroomId = props.classroom

  return (
    <div className={styles.challengeResult}>
      <p>Date: {challenge.date}</p>
      <p>Score: {challenge.score}</p>
      <p>Type: {challenge.case_type}</p>
      { challenge.note.length > 0 &&
      <p>Note: {challenge.note}</p>
      }
      <DisplayLetters name="Correct Answers" answers={correctLetters} />
      <DisplayLetters name="Incorrect Answers" answers={incorrectLetters}/>
    </div>
  )

}

export default ChallengeResult