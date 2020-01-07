import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import CreateStudent from './forms/CreateStudent';
import StudentItem from './StudentItem';

const ClassroomShow = (props) => {  

    const [students, setStudents] = useState([]);
    const [name, setName] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [studentCount, setStudentCount] = useState(0);
    const [showCreateForm, setShowCreateForm] = useState(false);

    const classID = props.match.params.id

    const fetchData = async () => {
      const result = await Axios.get(`/api/classrooms/${classID}/students`);
        setStudents([...result.data.students]);
        setName(result.data.classroom_name)
        console.log(result.data)
        console.log(`Retrieved ${result.data.students.length} students`);
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

    const handleStudentDelete = (id, index) => {  
      const removeStudent = (index) => {
        const currentStudents = [...students]
        currentStudents.splice(index,1)
        setStudents(currentStudents)
      };
      const deleteStudent = async (id) => {
        const result = await Axios.delete(`/api/classrooms/${classID}/students/${id}`);
        console.log(result.data);
      };
      if (confirm("All data for this student will be permanently deleted. Proceed?")) {
        removeStudent(index)
        deleteStudent(id);
      }
    }

    return (
      <React.Fragment>
        <h1>{name}</h1>
        <ul>
        {students.map(( node, index ) => {
          return (
            <li key={node.id}>
                <StudentItem name={node.name} id={node.id} handleDelete={() => { handleStudentDelete(node.id, index) }} />
            </li>
          )})
        }
        </ul>
        { showCreateForm && 
          <CreateStudent action={addStudent} classroom={classID} />
        }
     
        <button type="button" onClick={displayCreateForm}>Add Student</button>
      </React.Fragment>
    )
  
}

export default ClassroomShow
