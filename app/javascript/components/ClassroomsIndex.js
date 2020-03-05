import React, { useState, useEffect} from 'react';
import Axios from 'axios';
import CreateClassroom from './forms/CreateClassroom';
import styles from './../stylesheets/components/classroomsindex'
import ClassroomItem from './ClassroomItem';

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

  const handleClassroomDelete = (id, index) => {  
    const removeClassroom = (index) => {
      const currentClassrooms = [...classrooms]
      currentClassrooms.splice(index,1)
      setClassrooms(currentClassrooms)
    };
    const deleteClassroom = async (id) => {
      const result = await Axios.delete(`/api/classrooms/${id}`);
      console.log(result.data);
    };
    if (confirm("All data for this classroom will be permanently deleted. Proceed?")) {
      removeClassroom(index)
      deleteClassroom(id);
    }
  }

  return (
    <div className={styles.classroomsIndex}>
      {isLoading && 
      <p>
        <span className="sr-only">Loading...</span>
      </p> }
      <div className={styles.titleSection}>
        <h1>Your Classrooms</h1>
      </div>
      <div className={styles.addClassroom}>
          { showCreateForm && 
            <CreateClassroom action = {addClassroom} />
          }
        <button type="button" onClick={displayCreateForm}>Add a classroom</button>
      </div>
      <div>
        <ul className={styles.classroomsList}>
          {classrooms.map(( node, index ) => {
            return (
              <li className={styles.classroomItem} key={node.id}>
                <ClassroomItem name={node.name} id={node.id} handleDelete={() => { handleClassroomDelete(node.id, index) }}/>
              </li>
            )})
          }
        </ul> 
      </div>
   </div>
  )
  
}

export default ClassroomsIndex
