import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import useDropdown from './forms/useDropdown';
import styles from './../stylesheets/components/transitionto.module.scss';

const TransitionToChallenge = (props) => {
    const studentId = props.location.state ? props.location.state.student : "";
    const classroomId = props.location.state ? props.location.state.classroom : "";
    const challengeTypes = [{id: 1, name:"Uppercase"}, {id:2, name:"Lowercase"}] 
    const [classrooms, setClassrooms] = useState([]);
    const [students, setStudents] = useState([]);
    const [classroom, ClassroomDropdown] = useDropdown("Classroom", `${classroomId}`, classrooms)
    const [student, StudentDropdown] = useDropdown("Student", `${studentId}`, students)
    const [challengeType, TypeDropdown] = useDropdown("Challenge Type", "", challengeTypes)

    useEffect (() => {
        const fetchClassrooms = async () => {
          const result = await Axios.get('/api/classrooms');
            setClassrooms(result.data);
        };
        const fetchStudents = async (classroom) => {
          const result = await Axios.get(`/api/classrooms/${classroom}/students`);
          setStudents(result.data.students);
        };
        setStudents([]);
        fetchClassrooms();
        fetchStudents(classroom);
    },[classroom])

    const handleSubmit = event => {
      event.preventDefault();
      const challengeTypeName = challengeTypes[challengeType - 1].name
      const getData = async () => {
        const result = await Axios.get(`/api/classrooms/${classroom}/students/${student}/challenges/new/${challengeTypeName}`);
        const collection = result.data
        props.history.push({
          pathname: "/students/"+student+"/challenges",
          state: {type: challengeTypeName, classroom: classroom, student: student, collection: collection}
        });
      };
      getData()      
    };

    const handleCancel = () => {
      if (confirm('Leave now and your data will not be saved. Proceed?')){
        props.history.push({pathname:`/students/${studentId}`});
      }
    }

    return(
        <div className={styles.transitionTo}>
          <form className={styles.toForm} onSubmit={handleSubmit}>
              <ClassroomDropdown /> <br/>
              <StudentDropdown /> <br/>
              <TypeDropdown /> <br/>
              <span className={styles.buttonFields}>
                <button type="button" onClick={handleCancel}>Cancel</button>
                <button type="submit">Start Challenge</button> 
              </span>
          </form>
        </div>
    )
}

export default withRouter(TransitionToChallenge)  