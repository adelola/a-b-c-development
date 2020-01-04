import React from 'react';

const IncorrectAnswers = (props) => {
  const name = props.name
  const answers = props.answers


  return(
    <React.Fragment>
      <p>{name}:</p>
      <ul>
      {answers.map((node) => {
         return(
         <li key={node.id}> {node.letter} </li>
         )
      })}
      </ul> 
    </React.Fragment>
  )

}

export default IncorrectAnswers