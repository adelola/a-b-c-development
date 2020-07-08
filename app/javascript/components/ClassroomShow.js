import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import CreateStudent from './forms/CreateStudent';
import StudentItem from './StudentItem';
import EditClassroom from './forms/EditClassroom';
import styles from './../stylesheets/components/classroomshow.module.scss'; 
import ClassroomTrendChart from './ClassroomTrendChart';
import Pencil from '../images/noun_edit_1911367color.svg';
import ButtonRobot from '../images/noun_Robot_1631805.svg';
import RobotStudents from '../images/robot_pair.svg';

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
        //  console.log(`Retrieved ${result.data.class_avg} Class Average`);
        setIsLoading(false);
    };
    
    useEffect(() => {
        setIsLoading(false);
        fetchData();
        return (
          setShowCreateForm(false)
        )
    }, [studentCount, showEdit, setShowEdit]);

    const truncateName = (name) =>{
      let split_name = name.split(" ");
      let first = split_name.shift();
      let last = "";
      if (split_name[0]) {
        last = split_name[0].match(/\b\w/g).pop() + ".";
      } 
      return first + " " + last;
    }

    const classScores = students.map(x => (      //Creating json data from past challenges for Class Chart component
      { student: truncateName(x.name), 
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
      <div className={styles.classroomShow}>
        <div className={titleClass}>
          <div className={styles.titleSection}>
            {titleSection}
            { !showEdit &&
              <button type="button" className={`${styles.editClassBtn}`} onClick={startEdit}>
                <Pencil width={50} height={50}/>
              </button>
            }
          </div>
          { classAvg > 0  &&
            <React.Fragment>
              <p className={styles.scoreLabel}>Class Average</p>
              <div className={styles.scoreCard}>
                <p>{classAvg}</p>
              </div>
            </React.Fragment>
          } 
          { !isLoading && students.length === 0 &&
            <div className={styles.emptyState}>
              <p>To get started, add a student to this classroom.</p>
              <RobotStudents height={400} width={400}/>
            </div>
          }
          <div className={styles.addStudentSection}>
            { showCreateForm && 
              <CreateStudent action={addStudent} classroom={classID} cancel={displayCreateForm} />
            }
            <button type="button" 
                    className={`font-bold py-2 px-2 rounded ${styles.addStudentBtn}`} 
                    onClick={displayCreateForm}
                    style={{display: showCreateForm ? 'none' : 'flex'}}><ButtonRobot width={35} height={35}/>Add A Student</button>
          </div>
      
          <React.Fragment>
          { classAvg > 0  &&
              <div className={styles.classChart}>
                <h2 className="text-center">Class Graph</h2>
                <ClassroomTrendChart data={classScores} className={styles.chart}/>
              </div>
          }
          { students.length > 0  &&
            <div className={styles.studentSection}>  
              <ul>
              {students.map(( node, index ) => {
                return (
                  <li key={node.id}>
                    <Link to={`/students/${node.id}`}>
                      <StudentItem  className={styles.studentItem}
                                    name={node.name} 
                                    id={node.id} 
                                    classID={classID}
                                    lastScore={node.last_score || 0} 
                                    handleDelete={() => { handleStudentDelete(node.id, index) }} />
                    </Link>
                  </li>
                )})
              }
              </ul>     
            </div>
          }
          </React.Fragment>     
        </div>
      </div>  
    )
    
}

export default withRouter(ClassroomShow)
