import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const ClassroomsIndex = () => {
 
 useEffect( () => {
    console.log('something is happening')
    Axios.get('/api/classrooms')
    .then(response => console.log(response.data))
      
  }, []);

  return (
    <React.Fragment>
      <h1>ClassroomsIndex</h1>
    </React.Fragment>
  )
  
}

export default ClassroomsIndex
