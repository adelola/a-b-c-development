import React from 'react';
import styles from '../stylesheets/components/letterblock.module.scss';
import Sun from './../images/mini_sun.svg';
import Moon from './../images/mini_moon.svg';

const LetterBlock = (props) => {
    const letter =  props.letter
    const movement = props.movement

    const divStyle = {
        backgroundPosition: '0 0',
        transform: `${movement}`
      };

    return(
        <div id="alphabetBlock" className={styles.cube} style={divStyle}>
            <div className={styles.face}><h1>{letter}</h1></div>
            <div className={styles.face}><h2>{letter}</h2><Sun height={140} width={140}/><p>Correct</p></div>
            <div className={styles.face}><h2 style={{color:"#fff"}}>{letter}</h2><Moon height={140} width={140} /><p>Incorrect</p></div>
        </div>
    )
}

export default LetterBlock