import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useChallengeHooks } from './forms/ChallengeHooks';
import styles from '../stylesheets/components/challenge';
import RadioButton from './forms/RadioButton';

import { Prompt } from 'react-router-dom';

const Challenge = (props) => {
    

    const classroomId = props.location.state.classroom;
    const studentId = props.location.state.student;
    const challengeType = props.location.state.type;
    const [collection, setCollection] = useState([]);
    const [letter, setLetter] = useState({letter: "", status:"" });

    useEffect(() => {
      setCollection([...props.location.state.collection])
    }, [])
    
    const onCreate = () => {
      console.log(inputs);
      const postData = async () => {
        const result = await Axios.post(`/api/classrooms/${classroomId}/students/${studentId}/challenges`, {challenge:{...inputs}});
      };
      postData();
    };

    const { inputs, handleInputChange, handleSubmit } = useChallengeHooks(onCreate);

    return (
      <div className={styles.challenge}>
        <h1> Challenge</h1>
        <form onSubmit={handleSubmit}>
        {collection.map((node) => {
          return(
            <div key={node} className={styles.radios}>
              <RadioButton letter={node} action={handleInputChange} /> <br/><br/>
            </div>
          )})
        }
         <button type="submit"> Save Results</button>
        </form>
        {/* <Prompt when={this.state.valid !== true}
              message= 'Leave now and your data will not be saved. Proceed?'></Prompt> */}
      </div>
    )

}

export default Challenge
