import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import CreateStudent from './forms/CreateStudent';
import StudentItem from './StudentItem';
import EditClassroom from './forms/EditClassroom';
import styles from './../stylesheets/components/classroomshow';
import ClassroomTrendChart from './ClassroomTrendChart';
import Pencil from '../images/noun_edit_1911367color.svg';


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
            <button type="button" className={`${styles.editClassBtn}`} onClick={startEdit}>
              <Pencil width={50} height={50}/>
            </button>
          }
        </div>
        <p className={styles.scoreLabel}>Class Average</p>
        <div className={styles.scoreCard}>
          <p>{classAvg}</p>
        </div>

        <div className={styles.addStudentSection}>
          { showCreateForm && 
            <CreateStudent action={addStudent} classroom={classID} cancel={displayCreateForm} />
          }
          <button type="button" 
                  className={`font-bold py-4 px-4 rounded ${styles.addStudentBtn}`} 
                  onClick={displayCreateForm}
                  style={{display: showCreateForm ? 'none' : 'block'}}>Add Student</button>
        </div>
        
        { students.length > 0  &&
        <React.Fragment>
            <div className={styles.classChart}>
              <h2 className="text-center">Class Graph</h2>
              <ClassroomTrendChart data={classScores} className={styles.chart}/>
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
