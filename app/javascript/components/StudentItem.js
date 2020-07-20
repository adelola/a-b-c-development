import React, {useState, useEffect} from 'react';
import styles from './../stylesheets/components/studentitem.module.scss'; 
import DeleteStudent from '../images/noun_Remove_1715740.svg';


const StudentItem = (props) => { 
    const name = props.name
    const lastScore = props.lastScore
    const deleteSelf = props.handleDelete
    const [initial, setInitial] = useState("") 

    const getInitial = (name) =>{
      const letter = name.toLowerCase().match(/\b[a-z]/g)[0];  //Gets student's first initial
      setInitial("letter_"+letter);  //Builds statement to match appropriate class name based on initials
    }

    const handleDelete = (e) => {
      e.preventDefault();
      deleteSelf();
    }
    
    useEffect(() => {
      getInitial(name);
    }, []);

    return (
      <div className={styles.item}>
        <div className={styles.card}>
          <div className={styles.content}>
            <div>
              <span className={`flex flex-row justify-between`}>
                <h1>{name}</h1> 
                <button type="button" 
                        onClick={handleDelete} 
                        className={styles.delete}>
                  <DeleteStudent height={30} width={30}/>
                </button>
              </span>
              <p>Latest Challenge Score: <span className={styles.score}> {lastScore}% </span></p>
            </div>
          </div>
        </div>
        <div className={`${styles.letter} ${initial}`}></div>
      </div>
    )
}

export default StudentItem