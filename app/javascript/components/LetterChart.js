import React from 'react';
import d3 from 'd3-shape';


const LetterChart = (props) => {
    const answerArray =  props.letter

    return( 
     <svg id="graph" 
        xmlns="http://www.w3.org/2000/svg" 
        xlink="http://www.w3.org/1999/xlink">
        <rect width="20" height="20" x="0" y="0" fill="red"></rect>
        <rect width="20" height="20" x="0" y="20" fill="red"></rect>
        <rect width="20" height="20" x="0" y="40" fill="green"></rect>
        <rect width="20" height="20" x="0" y="60" fill="green"></rect>
    </svg>  
    )

}

export default LetterChart