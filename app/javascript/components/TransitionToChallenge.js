import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import useDropdown from './forms/useDropdown';


const TransitionToChallenge = (props) => {
    const studentId = props.location.state ? props.location.state.student : "";
    const classroomId = props.location.state ? props.location.state.classroom : "";
    const challengeTypes = [{id: 1, name:"Uppercase"}, {id:2, name:"Lowercase"}, {id: 3, name:"Both"}]
    
    const [classrooms, setClassrooms] = useState([]);
    const [students, setStudents] = useState([]);

    const [classroom, ClassroomDropdown,setClassroom] = useDropdown("Classroom", `${classroomId}`, classrooms)
    const [student, StudentDropdown, setStudent] = useDropdown("Student", `${studentId}`, students)
    const [challengeType, TypeDropdown] = useDropdown("Challenge Type", "", challengeTypes)

    const fetchClassrooms = async () => {
      const result = await Axios.get('/api/classrooms');
        setClassrooms(result.data);
    };

    const fetchStudents = async (classroom) => {
      const result = await Axios.get(`/api/classrooms/${classroom}/students`);
      const studentNames = result.data.map(({name}) => name);
        setStudents(result.data);
    };

    useEffect (() => {
        setStudents([]);
        setStudent("");
        fetchClassrooms();
        fetchStudents(classroom);
    },[classroom])

    
    
    


    return(
        <React.Fragment>
        <h1>Transition To Challenge</h1>
        <form>
          <ClassroomDropdown /> <br/>
          <StudentDropdown /> <br/>
          <TypeDropdown /> <br/>
          <button>Submit</button>
        </form>
        </React.Fragment>
    )




}

export default TransitionToChallenge