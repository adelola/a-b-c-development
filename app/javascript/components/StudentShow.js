import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import ChallengeResult from './ChallengeResult';


const StudentShow = (props) => {
  const [student, setStudent] = useState("")
  const [challenges, setChallenges] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const studentPath = props.location.pathname

  const fetchData = async () => {
    const result = await Axios.get(`/api/classrooms/1${studentPath}`);
      setStudent(result.data.student);
      setChallenges(result.data.challenges);
  };

  const deleteChallenge = async (id) => {
    const result = await Axios.delete(`/api/classrooms/${student.classroom_id}/students/${student.id}/challenges/${id}`);
    console.log(result.data)
  };

  const removeChallenge = (index) => {
    const currentChallenges = [...challenges]
    currentChallenges.splice(index,1)
    setChallenges(currentChallenges)
  };

  const handleDelete = (id, index) => {
    if (confirm("All data for this challenge will deleted. Proceed?")) {
      removeChallenge(index)
      // console.log(id)
      deleteChallenge(id);
      }
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
        challenges.map(( node, index ) => {
          return (
            <li key={node.challenge.id}>
              <ChallengeResult  challenge={node.challenge} 
                                incorrect={node.incorrect_answers} 
                                correct={node.correct_answers} />
              <button onClick={() => { handleDelete(node.challenge.id, index) }} > Delete </button>
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
