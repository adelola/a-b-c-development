import React from 'react';
import styles from './../stylesheets/components/displayletters';
import Sun from './../images/mini_sun.svg';
import Moon from './../images/mini_moon.svg';

const DisplayLetters = (props) => {
  const name = props.name
  const answers = props.answers

  let image
  if (name ==="Correct") {
    image = <Sun width={28} height={28}/>;
  } else {
    image = <Moon width={25} height={25}/>;
  }


  return(
    <div>
      <span className={styles.displayLetters}>
        {image} &nbsp;
        <h3>{name}</h3>
      </span>
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