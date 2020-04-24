import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import LetterChart from './LetterChart';
import styles from './../stylesheets/components/alphabetchart'

const AlphabetProgressChart = (props) => {
  // console.log(props)
  const [isLoading, setIsLoading] = useState(true);
  const classroomID = props.classroomID
  const studentID = props.studentID
 
    const letterA = ["incorrect","incorrect","correct","incorrect","correct","correct","correct","correct"]
    const letterB = ["correct","correct","incorrect","correct","correct","incorrect","incorrect","incorrect"]
    const letterC = ["incorrect","incorrect","incorrect","correct","correct","correct","correct","correct"]

    const fetchData = async () => {
      console.log("Fetching");
      const result = await Axios.get(`/api/classrooms/${classroomID}/students/${studentID}/letter_results`);

    };


    useEffect(() => {
      setIsLoading(false);
      fetchData();
    }, []);

    // [{letter: A, results: ["correct", "incorrect"]}, {letter: B, results: ["correct", "incorrect"]}]

    return(
        <div className={styles.alphabetChart}>
          <span className={styles.alphabetColumn}><LetterChart letter={letterA} /><h1>A</h1></span>
          <span className={styles.alphabetColumn}><LetterChart letter={letterB} /><h1>B</h1></span>
          <span className={styles.alphabetColumn}><LetterChart letter={letterC} /><h1>C</h1></span>
          <span className={styles.alphabetColumn}><LetterChart letter={letterA} /><h1>D</h1></span>
          <span className={styles.alphabetColumn}><LetterChart letter={letterB} /><h1>E</h1></span>
          <span className={styles.alphabetColumn}><LetterChart letter={letterC} /><h1>F</h1></span>
          <span className={styles.alphabetColumn}><LetterChart letter={letterA} /><h1>G</h1></span>
          <span className={styles.alphabetColumn}><LetterChart letter={letterB} /><h1>H</h1></span>
          <span className={styles.alphabetColumn}><LetterChart letter={letterC} /><h1>I</h1></span>
          <span className={styles.alphabetColumn}><LetterChart letter={letterA} /><h1>J</h1></span>
          <span className={styles.alphabetColumn}><LetterChart letter={letterB} /><h1>K</h1></span>
          <span className={styles.alphabetColumn}><LetterChart letter={letterC} /><h1>L</h1></span>
          <span className={styles.alphabetColumn}><LetterChart letter={letterA} /><h1>M</h1></span>
          <span className={styles.alphabetColumn}><LetterChart letter={letterB} /><h1>N</h1></span>
          <span className={styles.alphabetColumn}><LetterChart letter={letterC} /><h1>O</h1></span>
          <span className={styles.alphabetColumn}><LetterChart letter={letterA} /><h1>P</h1></span>
          <span className={styles.alphabetColumn}><LetterChart letter={letterB} /><h1>Q</h1></span>
          <span className={styles.alphabetColumn}><LetterChart letter={letterC} /><h1>R</h1></span>
          <span className={styles.alphabetColumn}><LetterChart letter={letterA} /><h1>S</h1></span>
          <span className={styles.alphabetColumn}><LetterChart letter={letterB} /><h1>T</h1></span>
          <span className={styles.alphabetColumn}><LetterChart letter={letterC} /><h1>U</h1></span>
          <span className={styles.alphabetColumn}><LetterChart letter={letterA} /><h1>V</h1></span>
          <span className={styles.alphabetColumn}><LetterChart letter={letterB} /><h1>W</h1></span>
          <span className={styles.alphabetColumn}><LetterChart letter={letterC} /><h1>X</h1></span>
          <span className={styles.alphabetColumn}><LetterChart letter={letterA} /><h1>Y</h1></span>
          <span className={styles.alphabetColumn}><LetterChart letter={letterB} /><h1>Z</h1></span>
        </div>
    )

}

export default AlphabetProgressChart