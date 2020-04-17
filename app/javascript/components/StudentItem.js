import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './../stylesheets/components/studentitem'; 
import DeleteStudent from '../images/noun_Remove_1715740.svg';
import AlphabetBlocks from '../images/alphabet_blocks.svg'


const StudentItem = (props) => { 
    const name = props.name;
    const lastScore = props.lastScore
    const handleDelete = props.handleDelete;
    const [initial, setInitial] = useState(""); 

    const getInitial = (name) =>{
      const letter = name.toLowerCase().match(/\b[a-z]/g)[0];  //Gets student's first initial
      // setInitial("letter_"+letter);  
      setInitial("letter_c");                           //Builds statement to match appropriate class name based on initials
    }
    
    useEffect(() => {
      getInitial(name);
    }, []);


    return (
      <div className={styles.item}>
        <div className={styles.card}>
          <div className={styles.content}>
            <span className={`flex flex-row justify-between`}><h1>{name}</h1> <button type="button" onClick={handleDelete} className={styles.delete}><DeleteStudent height={30} width={30}/></button></span>
            <p>Recent Challenge Score: <span className={styles.score}> {lastScore}% </span></p>
            <button type="button" className={`bg-teal-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full shadow-md`}><AlphabetBlocks height={32} width={32}/>Start Challenge</button> 
          </div>
        </div>
        <div className={`${styles.letter}  ${initial}`} >

        </div>
      </div>
    )
}

export default StudentItem