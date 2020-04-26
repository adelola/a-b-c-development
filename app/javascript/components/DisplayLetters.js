import React from 'react';
import styles from './../stylesheets/components/displayletters'

const DisplayLetters = (props) => {
  const name = props.name
  const answers = props.answers


  return(
    <div className={styles.displayLetters}>
      <h3>{name}:</h3>
      <ul className={styles.lettersWrapper}>
      {answers.map((node, index) => {
         return(
         <li className={`px-0 py-0 ${styles.letters}`} key={index}> {node} </li>
         )
      })}
      </ul> 
    </div>
  )

}

export default DisplayLetters