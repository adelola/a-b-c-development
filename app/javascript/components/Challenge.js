import React, { useState } from 'react';
import { useChallengeHooks } from './forms/ChallengeHooks';
import Axios from 'axios';
import styles from '../stylesheets/components/challenge';
import RadioButton from './forms/RadioButton';

import { Prompt } from 'react-router-dom';

const Challenge = () => {
    
    const [collection, setCollection] = useState([]);
    const [letter, setLetter] = useState({letter: "", status:"" });
    const letters = ["A", "B", "C", "d", "e", "f"];

    
    const onCreate = () => {
      console.log(inputs);
      // const tests = [{letter: "a", status: "correct"}, {letter: "b", status: "correct"}, {letter: "A", status: "incorrect"}];
      const postData = async () => {
        const result = await Axios.post('/api/classrooms/1/students/1/challenges', {challenge:{...inputs}});
        console.log(result.data);
      };
      postData();
    };

    const { inputs, handleInputChange, handleSubmit } = useChallengeHooks(onCreate);

    return (
      <div className={styles.challenge}>
        <h1> Challenge</h1>
        <form onSubmit={handleSubmit}>
        {letters.map((node) => {
          return(
            // <label key={node}> {node}
            //   <input  type="radio" 
            //           name={node} 
            //           value="correct"
            //           onChange={handleInputChange} 
            //           /><br/>
            //   <input  type="radio" 
            //       name={node} 
            //       value="incorrect"
            //       onChange={handleInputChange} 
            //       /><br/>
            // </label>
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
