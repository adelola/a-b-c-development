import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import LetterChart from './LetterChart';
import styles from './../stylesheets/components/alphabetchart.module.scss';

const AlphabetProgressChart = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [letters, setLetters] = useState("");
  const [letterCase, setLetterCase] = useState("Uppercase");
  const classroomID = props.classroomID
  const studentID = props.studentID
  const triggerUpdate = props.trigger

  const fetchData = async (caseType) => {
    const result = await Axios.get(`/api/classrooms/${classroomID}/students/${studentID}/letter_results/${caseType}`);
    setLetters(result.data.letters);
  };

  useEffect(() => {
    setIsLoading(false);
    fetchData( letterCase || "Uppercase");
  }, [handleCaseChange, letterCase, setLetterCase, triggerUpdate]);

  const handleCaseChange = ( newCase ) => {
    fetchData(newCase);
    setLetterCase(newCase);
  };

  let lowercaseStyle
  let uppercaseStyle

  if (letterCase === "Uppercase") {
      uppercaseStyle = "bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-orange-500 font-semibold"
      lowercaseStyle = "bg-gray-200 inline-block py-2 px-4 text-gray-500 hover:text-orange-700 font-semibold"
  } else {
      uppercaseStyle = "bg-gray-200 inline-block py-2 px-4 text-gray-500 hover:text-orange-700 font-semibold"
      lowercaseStyle = "bg-white inline-block border-l border-t border-r border-b-0 rounded-t py-2 px-4 text-orange-500 font-semibold"
  }

  return(
      <React.Fragment>
        <ul className={`flex border-b ${styles.headerTabs}`}>
          <li className="-mb-px mr-1 cursor-pointer">
            <a className={uppercaseStyle} onClick={() =>{handleCaseChange("Uppercase")}}>Uppercase</a>
          </li>
          <li className="mr-1 cursor-pointer">
            <a className={lowercaseStyle} onClick={() =>{handleCaseChange("Lowercase")}}>Lowercase</a>
          </li>
        </ul>
        <div className={styles.resultContainer}>
          { letters &&
            letters.map((node) => {
              return(
                <span className={styles.alphabetColumn} key={node[0]}><LetterChart letters={node[1]} letter={node[0]}/><h1>{node[0]}</h1></span>
              )
            })
          }
        </div>
      </React.Fragment>
  )

}

export default AlphabetProgressChart