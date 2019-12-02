import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import CreateClassroom from './forms/CreateClassroom';
import { Link } from 'react-router-dom';

const ClassroomsIndex = () => {
 const [classrooms, setClassrooms] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 const [classroomCount, setClassroomCount] = useState(0);
 const [showCreateForm, setShowCreateForm] = useState(false);
 
 const fetchData = async () => {
  const result = await Axios.get('/api/classrooms');
    setClassrooms([...result.data]);
    console.log(`Retrieved ${result.data.length} classrooms`);
    setIsLoading(false);
 };
  
 useEffect(() => {
    setIsLoading(false);
    fetchData();
    return (
      setShowCreateForm(false)
    )
  }, [classroomCount]);

  const displayCreateForm = () => {
    setShowCreateForm(!showCreateForm)
  } 
  const addClassroom = () => {
    setClassroomCount(classroomCount + 1);
  }

  return (
    <React.Fragment>
      {isLoading && <p>
        <span className="sr-only">Loading...</span>
      </p> }
      <h1>ClassroomsIndex</h1>
      <ul>
        {classrooms.map(( node ) => {
          return (
            <li key={node.id}>
              <Link to={`/classrooms/${node.id}`}>{node.name}</Link>
            </li>
          )})
        }
      </ul><br /> 
      { showCreateForm && 
        <CreateClassroom action = {addClassroom} />
      }
     
     <button onClick={displayCreateForm}>Add a classroom</button>
    </React.Fragment>
  )
  
}

export default ClassroomsIndex
