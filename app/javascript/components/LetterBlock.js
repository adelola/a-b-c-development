import React from 'react';
import styles from '../stylesheets/components/letterblock';

const LetterBlock = (props) => {
    const letter =  props.letter
    const movement = props.movement

    const divStyle = {
        backgroundPosition: '0 0',
        transform: `${movement}`
      };

    return(
        <div id="alphabetBlock" className={styles.cube} style={divStyle}>
            <div className={styles.face}>{letter}</div>
            <div className={styles.face}>&#10003;</div>
            <div className={styles.face}>&#120;</div>
        </div>
    )
}

export default LetterBlock