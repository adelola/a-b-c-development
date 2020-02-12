import React, { useState, useEffect } from 'react';
import styles from '../../stylesheets/components/radiobutton'
import LetterBlock from '../LetterBlock';


const RadioButton = (props) => {

    const letter = props.letter;
    const [value, setValue] = useState("unattempted");
    const [backgroundColor, setBackgroundColor] = useState("gray");

    const handleChange = () => {
        if (value === "correct") {
            setValue("incorrect")
            setBackgroundColor("red")
        } else if (value === "incorrect" ){
            setValue("unattempted")
            setBackgroundColor("gray")
        } else {
            setValue("correct")
            setBackgroundColor("green")
        }
    }

    const letterObj = {letter: letter, status: value}

    useEffect(() => {
        return (
          props.handleInputChange(letterObj)
        )
    }, [value, setValue, setBackgroundColor]);

    return(
        <div className={styles.radioButton} value={value} style={{background: backgroundColor}} onClick={() => handleChange()}>
            <LetterBlock letter={letter} />
        </div>
    )
}
export default RadioButton
