import React from 'react';
import styles from '../stylesheets/components/letterblock';

const LetterBlock = (props) => {
    const letter =  props.letter
    const movement = props.movement

    return(
        <div id="alphabetBlock" className={styles.cube} style={{transform: `${movement}`}}>`
            <div className={styles.face}>{letter}</div>
            <div className={styles.face}>&#10003;</div>
            <div className={styles.face}>&nbsp;</div>
            <div className={styles.face}>&#120;</div>


        </div>
    )

}

export default LetterBlock