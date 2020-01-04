import React,  {useState, useEffect} from 'react';

const ChallengeResult = (props) => {
   const challenge = props.challenge
   const correctLetters = props.correct
   const incorrectLetters = props.incorrect


   return (
    <React.Fragment>
        <p> {challenge.date} || {challenge.score} || {challenge.note} || {challenge.case_type}  <br/>
        Correct Letters: {correctLetters.map((correct) => {
           return(
            <span key={correct.id}> {correct.letter} &nbsp;
            </span>
            )
        })}
        <br />
        Incorrect Letters: 
        { incorrectLetters.map((incorrect) => {
           return(
            <span key={incorrect.id}> {incorrect.letter} &nbsp;
            </span>
            )
        })}
        
        </p> 

     </React.Fragment>
   )

}

export default ChallengeResult