import React from 'react';
import styles from './../stylesheets/components/displayletters'

const DisplayLetters = (props) => {
  const name = props.name
  const answers = props.answers


  return(
    <div className={styles.displayLetters}>
      <h3>{name}:</h3>
      <ul className={styles.lettersWrapper}>
      {answers.map((node) => {
         return(
         <li className={`px-0 py-0 ${styles.letters}`} key={node.id}> {node.letter} </li>
         )
      })}
      </ul> 
    </div>
  )

}

export default DisplayLetters