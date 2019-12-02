import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import CreateStudent from './forms/CreateClassroom';
import { Link } from 'react-router-dom';


const ClassroomShow = () => {

    const [students, setStudents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const fetchData = async () => {
      const result = await Axios.get('/api/students');
        setStudents([...result.data]);
        console.log(`Retrieved ${result.data.length} students`);
        setIsLoading(false);
    };
    
    useEffect(() => {
        setIsLoading(false);
        fetchData();
       
    }, []);

    return (
      <React.Fragment>
        <h1>ClassroomShow</h1>
        <ul>
        {students.map(( node ) => {
          return (
            <li key={node.id}>
              <Link to={`/students/${node.id}`}>{node.name}</Link>
            </li>
          )})
        }
        </ul>
      </React.Fragment>
    )
  
}

export default ClassroomShow
