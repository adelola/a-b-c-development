import React from 'react';
import { useChallengeHooks } from './forms/ChallengeHooks';
import styles from '../stylesheets/components/challenge';
import RadioButton from './forms/RadioButton';

import { Prompt } from 'react-router-dom';

const Challenge = () => {
    const letters = ["A", "B", "C", "d", "e", "f"]
    
    const onCreate = () => {
      console.log(inputs);
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
              <RadioButton  letter={node} /> <br/><br/>
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
