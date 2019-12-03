import React, { useState, useEffect } from 'react';
import styles from '../../stylesheets/components/radiobutton'


const RadioButton = (props) => {

    const letter = props.letter
    const [value, setValue] = useState("unattempted")
    const [backgroundColor, setBackgroundColor] = useState("gray")

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

    return(
        <div className={styles.letter} value={value} style={{background: backgroundColor}} onClick={() => handleChange()}>
            {letter}
        </div>
        // <label className={styles.radio} style={{background: backgroundColor}}>
        //     <input type="radio" name={letter}  value={value} onChange={handleChange}/> {letter}<br />
        // </label>
    )
}
export default RadioButton
