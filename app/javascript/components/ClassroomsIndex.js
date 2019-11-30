import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import CreateClassroom from './forms/CreateClassroom';
import { Link } from 'react-router-dom';

const ClassroomsIndex = () => {
 const [classrooms, setClassrooms] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 
  useEffect(() => {
    setIsLoading(false);
    const fetchData = async () => {
      const result = await Axios.get('/api/classrooms');
      setClassrooms([...result.data]);
      console.log(`Retrieved ${result.data.length} classrooms`);
      setIsLoading(false);
    };
  
    fetchData();
  }, []);

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
              <Link to={`/classrooms/${node.id}`} >{node.name}</Link>
            </li>
          )})
        }
      </ul><br /> <br />
      <div>
        <CreateClassroom />
      </div>
    </React.Fragment>
  )
  
}

export default ClassroomsIndex
