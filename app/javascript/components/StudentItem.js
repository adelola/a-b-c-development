import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './../stylesheets/components/studentitem'; 


const StudentItem = (props) => { 
    const name = props.name;
    const lastScore = props.lastScore
    const handleDelete = props.handleDelete;
    const [initial, setInitial] = useState(""); 

    const getInitial = (name) =>{
      const letter = name.toLowerCase().match(/\b[a-z]/g)[0];  //Gets student's first initial
      setInitial("letter_"+letter);                             //Builds statement to match appropriate class name based on initials
    }
    
    useEffect(() => {
      getInitial(name);
    }, []);


    return (
      <div className={`${styles.item} ${initial}`}>
        <h1>{name}</h1>
        <span>Recent Challenge: {lastScore} &nbsp; &nbsp; &nbsp; </span>
        <button type="button" onClick={handleDelete}>Delete Student</button>
        <button>Start A Challenge</button>
      </div>
    )
}

export default StudentItem