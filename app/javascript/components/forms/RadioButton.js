import React, { useState, useEffect } from 'react';
import styles from '../../stylesheets/components/radiobutton.module.scss';
import LetterBlock from '../LetterBlock';


const RadioButton = (props) => {

    const letter = props.letter;
    const [value, setValue] = useState("unattempted");
    const [movement, setMovement]= useState("");

    const handleChange = () => {
        if (value === "correct") {
            setValue("incorrect")
            setMovement("rotateY(-90deg)")
        } else if (value === "incorrect" ){
            setValue("unattempted")
            setMovement("rotateY(0deg)")
        } else {
            setValue("correct")
            setMovement("translateZ(-100px) rotateX(-90deg)")
        }
    }

    const letterObj = {letter: letter, status: value}

    useEffect(() => {
        return (
          props.handleInputChange(letterObj)
        )
    }, [value, setValue]);

    return(
        <div className={styles.radioButton} value={value} onClick={() => handleChange()}>
            <LetterBlock movement={movement} letter={letter} />
        </div>
    )
}
export default RadioButton
