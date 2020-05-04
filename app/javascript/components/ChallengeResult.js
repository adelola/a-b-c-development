import React from 'react';
import * as Moment from 'moment';
import DisplayLetters from './DisplayLetters';
import styles from './../stylesheets/components/challengeresult'


const ChallengeResult = (props) => {
  console.log(Moment(props.challenge.created_at).calendar())
  const challenge = props.challenge
  const date = Moment(props.challenge.date).format("MMM Do, YYYY")
  const relativeTime = Moment(props.challenge.created_at).calendar()
  const correctLetters = props.correct
  const incorrectLetters = props.incorrect
  const studentId = props.student
  const classroomId = props.classroom


  return (
    <div className={styles.challengeResult} >
      <div className={styles.challengeStats}>
        <h1>{challenge.score}%</h1>
        <span className={styles.secondaryInfo}>
          <p>{date}</p>
          <p>{relativeTime}</p>
          <p>{challenge.case_type}</p>
        </span>
      </div>
      <div className={styles.answers}>
        <DisplayLetters name="Correct" answers={correctLetters} />
        <DisplayLetters name="Incorrect" answers={incorrectLetters}/>
      </div>
      <div className={styles.note}>
        { challenge.note.length > 0 &&
        <p>{challenge.note}</p>
        }
      </div>
    </div>
  )

}

export default ChallengeResult