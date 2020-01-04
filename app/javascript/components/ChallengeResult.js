import React from 'react';
import Axios from 'axios';
import DisplayLetters from './DisplayLetters';

const ChallengeResult = (props) => {
  const challenge = props.challenge
  const correctLetters = props.correct
  const incorrectLetters = props.incorrect
  const studentId = props.student
  const classroomId = props.classroom

  return (
    <React.Fragment>
      <p> {challenge.date} || {challenge.score} || {challenge.note} || {challenge.case_type}</p> 
      <DisplayLetters name="Correct Answers" answers={correctLetters} />
      <DisplayLetters name="Incorrect Answers" answers={incorrectLetters}/>
    </React.Fragment>
  )

}

export default ChallengeResult