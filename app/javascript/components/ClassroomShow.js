import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import CreateStudent from './forms/CreateStudent';
import StudentItem from './StudentItem';
import EditClassroom from './forms/EditClassroom';

const ClassroomShow = (props) => {  
    
    const classID =  props.match.params.id
    const [students, setStudents] = useState([]);
    const [name, setName] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [showEdit, setShowEdit] =  useState(false);
    const [studentCount, setStudentCount] = useState(0);
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [classAvg, setClassAvg] = useState(0);

    const fetchData = async () => {
      const result = await Axios.get(`/api/classrooms/${classID}/students`);
        setStudents([...result.data.students]);
        setName(result.data.classroom_name);
        setClassAvg(result.data.class_avg)
        //  console.log(`Retrieved ${result.data.students.length} students`);
        setIsLoading(false);
    };
    
    useEffect(() => {
        setIsLoading(false);
        fetchData();
        return (
          setShowCreateForm(false)
        )
    }, [studentCount, showEdit, setShowEdit]);

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

    const startEdit = () => {
      setShowEdit(true);
    }
    
    const cancelEdit = () => {
      setShowEdit(false)
    }

    let titleSection;

    if (showEdit) {
      titleSection = <EditClassroom inputs={name} id={classID} cancel={cancelEdit} />;
    } else {
      titleSection =  <h1>{name}</h1>;
    }

    return (
      <React.Fragment>
        <div>
          {titleSection}
        </div>
        { !showEdit &&
          <button type="button" onClick={startEdit}>Edit name</button>
        }

        <h2>Class Average: {classAvg}</h2>

        <ul>
        {students.map(( node, index ) => {
          return (
            <li key={node.id}>
                <StudentItem  name={node.name} 
                              id={node.id} 
                              lastScore={node.last_score} 
                              handleDelete={() => { handleStudentDelete(node.id, index) }} />
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

export default withRouter(ClassroomShow)
