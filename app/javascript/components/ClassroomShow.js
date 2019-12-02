import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import CreateStudent from './forms/CreateStudent';
import { Link } from 'react-router-dom';


const ClassroomShow = (props) => {  

    const [students, setStudents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [studentCount, setStudentCount] = useState(0);
    const [showCreateForm, setShowCreateForm] = useState(false);

    const classID = props.match.params.id

    const fetchData = async () => {
      const result = await Axios.get(`/api/classrooms/${classID}/students`);
        setStudents([...result.data]);
        console.log(`Retrieved ${result.data.length} students`);
        setIsLoading(false);
    };
    
    useEffect(() => {
        setIsLoading(false);
        fetchData();
        return (
          setShowCreateForm(false)
        )
    }, [studentCount]);

    const displayCreateForm = () => {
      setShowCreateForm(!showCreateForm)
    } 
    const addStudent = () => {
      setStudentCount(studentCount + 1);
    }

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
        { showCreateForm && 
          <CreateStudent action={addStudent} classroom={classID} />
        }
     
        <button onClick={displayCreateForm}>Add Student</button>
      </React.Fragment>
    )
  
}

export default ClassroomShow
