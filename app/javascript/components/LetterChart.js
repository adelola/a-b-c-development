import React, {useState, useEffect} from 'react';
import styles from './../stylesheets/components/letterchart.module.scss';

const LetterChart = (props) => {
  const answerArray =  props.letters
  const [first, setFirst] = useState("#d1d1d1");
  const [second, setSecond] = useState("#d1d1d1");
  const [third, setThird] = useState("#d1d1d1");
  const [fourth, setFourth] = useState("#d1d1d1"); 
  const [fifth, setFifth] = useState("#d1d1d1");
  const [sixth, setSixth] = useState("#d1d1d1");
  const [seventh, setSeventh] = useState("#d1d1d1");
  const [eighth, setEighth] = useState("#d1d1d1"); 
  const correctColor = "#7CC9B6"
  const incorrectColor = "#F46A4B"
  
  const replaceColors = (item)=> {
    if (item === true){
      return correctColor;  
    }
    else if (item === false) {
      return incorrectColor
    }
  }

  const updateArray = () =>{
    return [...answerArray].map((x) => replaceColors(x) )
  } 
  
  useEffect(() => {
    const colorArray = [...updateArray()]
    setFirst(colorArray[0] || "#d1d1d1")
    setSecond(colorArray[1] || "#d1d1d1")
    setThird(colorArray[2] || "#d1d1d1")
    setFourth(colorArray[3] || "#d1d1d1")
    setFifth(colorArray[4] || "#d1d1d1")
    setSixth(colorArray[5] || "#d1d1d1")
    setSeventh(colorArray[6] || "#d1d1d1")
    setEighth(colorArray[7] || "#d1d1d1")
  },[answerArray])

    return(  
      <svg className={styles.column} version="1.1" id="graph" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 437">
        <path fill={first} d="M23.1,373.3c0-5.9-5.2-10.7-11.5-10.7l0,0c-6.4,0-11.5,4.8-11.5,10.7v53c0,5.9,5.2,10.8,11.5,10.8S23,432.2,23,426.3
        L23.1,373.3L23.1,373.3z"/>
        <path fill={second} d="M23.1,322c0-5.9-5.2-10.7-11.5-10.7S0,316,0,322v53c-0.5-6.4,4.3-11.9,10.7-12.3c6.4-0.5,11.9,4.3,12.3,10.7
        c0,0.6,0,1.1,0,1.7L23.1,322L23.1,322z"/>
        <path fill={third} d="M23.1,272.3c0-5.9-5.2-10.7-11.5-10.7S0,266.4,0,272.3v53c-0.5-6.4,4.3-11.9,10.7-12.3c6.4-0.5,11.9,4.3,12.3,10.7
        c0,0.6,0,1.1,0,1.7L23.1,272.3L23.1,272.3z"/>
        <path fill={fourth} d="M23.1,221.2c0-5.9-5.2-10.7-11.5-10.7S0,215.2,0,221.2v53c-0.5-6.4,4.3-11.9,10.7-12.3c6.4-0.5,11.9,4.3,12.3,10.7
        c0,0.6,0,1.1,0,1.7L23.1,221.2L23.1,221.2z"/>
        <path fill={fifth} d="M23.1,171.4c0-5.9-5.2-10.7-11.5-10.7S0,165.4,0,171.4v53c-0.5-6.4,4.3-11.9,10.7-12.3c6.4-0.5,11.9,4.3,12.3,10.7
        c0,0.6,0,1.1,0,1.7L23.1,171.4L23.1,171.4z"/>
        <path fill={sixth} d="M23.1,119.9c0-5.9-5.2-10.7-11.5-10.7S0,114,0,119.9v53c-0.5-6.4,4.3-11.9,10.7-12.3c6.4-0.5,11.9,4.3,12.3,10.7
        c0,0.6,0,1.1,0,1.7L23.1,119.9L23.1,119.9z"/>
        <path fill={seventh} d="M23.1,69.1c0-5.9-5.2-10.7-11.5-10.7S0,63.2,0,69.1v53c-0.5-6.4,4.3-11.9,10.7-12.3c6.4-0.5,11.9,4.3,12.3,10.7
        c0,0.6,0,1.1,0,1.7L23.1,69.1L23.1,69.1z"/>
        <path fill={eighth} d="M23.1,19.5c0-5.9-5.2-10.7-11.5-10.7S0,13.6,0,19.5v53c-0.5-6.4,4.3-11.9,10.7-12.3C17,59.7,22.5,64.5,23,70.9
        c0,0.6,0,1.1,0,1.7L23.1,19.5L23.1,19.5z"/>
      </svg>  
    )
}

export default LetterChart