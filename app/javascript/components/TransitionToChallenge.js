import React, { useState, useEffect } from 'react';
import useDropdown from './forms/useDropdown';


const TransitionToChallenge = (props) => {

    const [studentId, setStudentId] = useState('')
    const [classroomId, setClassroomId] = useState('')
    const [challengeType, setChallengeType] = useState('uppercase')
    const challengeTypes = ["Uppercase", "Lowercase", "Both"]
    
    const [classrooms, setClassrooms] = useState([]);
    const [students, setStudents] = useState([]);
    
    const [classroom, ClassroomDropdown] = useDropdown("Classroom", "", classrooms)
    const [student, StudentDropdown, setStudent] = useDropdown("Student", "", students)
    const [challengeType, TypeDropdown] = useDropdown("Challenge Type", "", challengeTypes)


    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios.get('/api/classrooms');
              setClassrooms([...result.data]);
           };
    }, [classroom, setStudent,])
    

    useEffect (() => {
     setStudentId(props.location.state);
    },[])

    const getClassroom = () => {

    }

    return(
        <h1>Transition To Challenge</h1>
        <form>
          <ClassroomDropdown />
          <StudentDropdown />
          <TypeDropdown /> 
          <button>Submit</button>
        </form>
    )




}

export default TransitionToChallenge