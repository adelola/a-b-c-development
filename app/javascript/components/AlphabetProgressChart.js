import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import LetterChart from './LetterChart';
import styles from './../stylesheets/components/alphabetchart'

const AlphabetProgressChart = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [letters, setLetters] = useState("");
  const [letterCase, setLetterCase] = useState("Uppercase");
  const classroomID = props.classroomID
  const studentID = props.studentID

  const fetchData = async (caseType) => {
    const result = await Axios.get(`/api/classrooms/${classroomID}/students/${studentID}/letter_results/${caseType}`);
    setLetters(result.data.letters);
    console.log(result.data.letters)
  };

  useEffect(() => {
    setIsLoading(false);
    fetchData("Uppercase");
  }, []);

  const handleCaseChange = ( newCase ) => {
    setLetterCase(newCase);
    fetchData(newCase);
  };

  let lowercaseStyle
  let uppercaseStyle

  if (letterCase === "Uppercase") {
      uppercaseStyle = " bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
      lowercaseStyle = "bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
  } else {
      uppercaseStyle = "bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
      lowercaseStyle = "bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
  }

    return(
        <React.Fragment>
          <ul className="flex border-b">
            <li className="-mb-px mr-1 cursor-pointer">
              <a className={uppercaseStyle} onClick={() =>{handleCaseChange("Uppercase")}}>Uppercase</a>
            </li>
            <li className="mr-1 cursor-pointer">
              <a className={lowercaseStyle} onClick={() =>{handleCaseChange("Lowercase")}}>Lowercase</a>
            </li>
          </ul>
          <div className={styles.alphabetChart}>
            { letters &&
              letters.map((node, index) => {
                return(
                  <span className={styles.alphabetColumn} key={index}><LetterChart letters={node[1]} /><h1>{node[0]}</h1></span>
                )
              })
            }
          </div>
        </React.Fragment>
    )

}

export default AlphabetProgressChart