import React from 'react';
import styles from '../stylesheets/components/letterblock';

const LetterBlock = (props) => {
    const letter =  props.letter

    return(
        <div id="alphabetBlock" className={styles.cube}>
            <div className={styles.face}>{letter}</div>
            <div className={styles.face}>&#10003;</div>
            {/* <div class="face">&#120;</div> */}
        </div>
    )

}

export default LetterBlock