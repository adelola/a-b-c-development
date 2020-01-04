import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import ChallengeResult from './ChallengeResult';


const StudentShow = (props) => {
  const [student, setStudent] = useState("")
  const [challenges, setChallenges] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const studentID = props.location.pathname

  const fetchData = async () => {
    const result = await Axios.get(`/api/classrooms/1${studentID}`);
      setStudent(result.data.student);
      setChallenges(result.data.challenges);
  };
  
  useEffect(() => {
      setIsLoading(false);
      fetchData();
  },[]);


  return (
    <React.Fragment>
      <h1>{student.name} </h1>
      <h2>Challenges</h2>
      <ul>
      {challenges && 
        challenges.map(( node ) => {
          return (
            <li key={node.challenge.id}>
              <ChallengeResult challenge={node.challenge} incorrect={node.incorrect_answers} correct={node.correct_answers} />
            </li>
          )})
        }
      </ul>
      <div>
        <Link to={{pathname: "/challenges/new",
              state: { student: student.id, classroom: student.classroom_id  }
              }}
        
        >Take A Challenge</Link>
      </div>
    </React.Fragment>
  )
}

export default withRouter(StudentShow);
