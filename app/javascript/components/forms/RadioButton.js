import React, { useState, useEffect } from 'react';
import styles from '../../stylesheets/components/radiobutton'
import LetterBlock from '../LetterBlock';


const RadioButton = (props) => {

    const letter = props.letter;
    const [value, setValue] = useState("unattempted");
    const [backgroundColor, setBackgroundColor] = useState("gray");
    const [movement, setMovement]= useState("");

    const handleChange = () => {
        if (value === "correct") {
            setValue("incorrect")
            setBackgroundColor("red")
            setMovement("rotateY(-90deg)")

           
        } else if (value === "incorrect" ){
            setValue("unattempted")
            setBackgroundColor("gray")
            setMovement("rotateY(0deg)")

        } else {
            setValue("correct")
            setBackgroundColor("green")
            setMovement("translateZ(-100px) rotateX(-90deg)")
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
            <LetterBlock movement={movement} letter={letter} />
        </div>
    )
}
export default RadioButton
