import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Axios from 'axios';
import CreateClassroom from './forms/CreateClassroom';
import styles from './../stylesheets/components/classroomsindex.module.scss';
import Classroom from './../images/classroom.svg';
import DeleteButton from '../images/Delete_round.svg';
import TrainEngine from '../images/noun_Train_head.svg';
import TrainAvatar from './TrainAvatar';

const ClassroomsIndex = () => {
 const [classrooms, setClassrooms] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 const [classroomCount, setClassroomCount] = useState(0);
 const [showCreateForm, setShowCreateForm] = useState(false);
 const history = createBrowserHistory();
 
 const fetchData = async () => {
  const result = await Axios.get('/api/classrooms');
    setClassrooms([...result.data]);
    console.log(`Retrieved ${result.data.length} classrooms`);
    setIsLoading(false);
 };
  
 useEffect(() => {
    setIsLoading(false);
    setShowCreateForm(false)
    fetchData();
    return (
      history.replace('/')
    )
  }, [classroomCount]);

  const displayCreateForm = () => {
    setShowCreateForm(!showCreateForm)
  }

  const addClassroom = () => {
    setClassroomCount(classroomCount + 1);
  }

  const handleClassroomDelete = (id, index, name) => {  
    const removeClassroom = (index) => {
      const currentClassrooms = [...classrooms]
      currentClassrooms.splice(index,1)
      setClassrooms(currentClassrooms)
    };
    const deleteClassroom = async (id) => {
      const result = await Axios.delete(`/api/classrooms/${id}`);
      console.log(result.data);
    };
    if (confirm(`All data for ${name} will be permanently deleted. Proceed?`)) {
      removeClassroom(index)
      deleteClassroom(id);
    }
  }

  return (
    <div className={styles.classroomsIndex}>
      {isLoading && 
        <p>
          <span className="sr-only">Loading...</span>
        </p>
      }
      { classrooms.length === 0 &&
        <div className={styles.emptyState}>
          <h1>Create a classroom</h1>
          <p>Get started by creating a classroom to organize your students.</p>
          <Classroom width={350} height={350} className={styles.classroomImage}/> 
          <div className={styles.addClassroom}>
            { showCreateForm && 
              <CreateClassroom action ={addClassroom} cancel={displayCreateForm} />
            }
            <button type="button" 
                    className={styles.addClassroomBtn} 
                    onClick={displayCreateForm} 
                    style={{display: showCreateForm ? 'none' : 'block'}}>
                      Start a classroom
            </button>
          </div>
        </div>
      } 
      { classrooms.length > 0 &&
        <React.Fragment>
        <div className={styles.titleSection}>
          <span className={styles.mainTitle}>
          <h1>Classrooms</h1>
          <div className={styles.addClassroom}>
              { showCreateForm && 
                <CreateClassroom action ={addClassroom} cancel={displayCreateForm} />
              }
            <button type="button" 
                    className={styles.addClassroomBtn} 
                    onClick={displayCreateForm} 
                    style={{display: showCreateForm ? 'none' : 'block'}}>
                      Add a classroom
            </button>
          </div> 
          </span> 
        </div>        
        <div className={styles.classrooms}>
          <ul className={styles.classroomsList}>
            <li className={styles.classroomItem} ><TrainEngine width={260} height={260} /></li>
            {classrooms.map(( node, index ) => {
              return (
                <li className={styles.classroomItem} key={node.id}>
                  <Link to={`/classrooms/${node.id}`}>
                    <TrainAvatar index={index} />
                    <h1>{node.name}</h1>
                  </Link>
                  <DeleteButton width={60} height={60} onClick={() => {handleClassroomDelete(node.id, index, node.name)}}/> 
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

export default ClassroomsIndex
