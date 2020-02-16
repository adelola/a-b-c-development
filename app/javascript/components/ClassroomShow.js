import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import CreateStudent from './forms/CreateStudent';
import StudentItem from './StudentItem';
import EditClassroom from './forms/EditClassroom';
import styles from './../stylesheets/components/classroomshow';
import ClassroomTrendChart from './ClassroomTrendChart';

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
        console.log(result.data)
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

    const classScores = students.map(x => (      //Creating json data from past challenges for Class Chart component
      { student: x.name, 
        score: x.last_score}))

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
    let titleClass;

    if (showEdit) {
      titleSection = <EditClassroom inputs={name} id={classID} cancel={cancelEdit} />;
    } else {
      titleSection =  <h1>{name}</h1>;
    }

    if (students.length > 0) {
      titleClass = styles.occupiedClassroom
    } else {
      titleClass=  styles.emptyClassroom
    }

    return (
      <div className={titleClass}>

        <div className={styles.titleSection}>
          {titleSection}
          { !showEdit &&
            <button type="button" className={`  ${styles.editClassBtn}`} onClick={startEdit}>Edit name</button>
          }
        </div>

        <div className={styles.addStudentSection}>
          { showCreateForm && 
            <CreateStudent action={addStudent} classroom={classID} />
          }
          <button type="button" className={`bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ${styles.addStudentBtn}`} onClick={displayCreateForm}>Add Student</button>
        </div>
        
        { students.length > 0  &&
        <React.Fragment>
          <div className={styles.classOverview}>
            <div className={styles.classChart}>
              <h2 className="text-center">Class Graph</h2>
              <ClassroomTrendChart data={classScores} />
            </div>
            <div className={styles.classSummary}>
              <h2 className="text-center py-4">Class at a Glance</h2>
              <p>Class Average: <strong>{classAvg}</strong></p>
            </div>
          </div>

          <div className={styles.studentSection}>  
            <ul>
            {students.map(( node, index ) => {
              return (
                <li key={node.id}>
                    <StudentItem  className={styles.studentItem}
                                  name={node.name} 
                                  id={node.id} 
                                  lastScore={node.last_score || 0} 
                                  handleDelete={() => { handleStudentDelete(node.id, index) }} />
                </li>
              )})
            }
            </ul>     
          </div>
          </React.Fragment>
        }     
      </div>
    )
  
}

export default withRouter(ClassroomShow)
