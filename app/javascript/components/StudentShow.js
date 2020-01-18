import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import ChallengeResult from './ChallengeResult';
import EditStudent from './forms/EditStudent';
import StudentTrendChart from './StudentTrendChart';
import * as Moment from 'moment'

const StudentShow = (props) => {

  const [student, setStudent] = useState("")
  const [challenges, setChallenges] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [showEdit, setShowEdit] =  useState(false);
  const studentPath = props.location.pathname
  const scores = challenges.reverse().map(x => (
    { date: Moment(x.challenge.date).format('MMM Do'), 
      score: x.challenge.score}))

  const fetchData = async () => {
    const result = await Axios.get(`/api/classrooms/1${studentPath}`);
      setStudent(result.data.student);
      setChallenges(result.data.challenges);
  };
  
  useEffect(() => {
    fetchData();
    setIsLoading(false);
  },[showEdit, setShowEdit]);

  const handleDelete = (id, index) => {
    const removeChallenge = (index) => {
      const currentChallenges = [...challenges]
      currentChallenges.splice(index,1)
      setChallenges(currentChallenges)
    };
    const deleteChallenge = async (id) => {
      const result = await Axios.delete(`/api/classrooms/${student.classroom_id}/students/${student.id}/challenges/${id}`);
      console.log(result.data);
    };
    if (confirm("All data for this challenge will deleted. Proceed?")) {
      removeChallenge(index)
      deleteChallenge(id);
      }
  };

  const startEdit = () => {
    setShowEdit(true);
  }
  
  const cancelEdit = () => {
    setShowEdit(false)
  }

  let titleSection;

  if (showEdit) {
    titleSection = <EditStudent inputs={student.name} id={student.id} classID={student.classroom_id} cancel={cancelEdit} />;
  } else {
    titleSection =  <h1>{student.name}</h1>;
  }
  

  return (

    <React.Fragment>
      <div>
        {titleSection}
      </div>
        { !showEdit &&
          <button type="button" onClick={startEdit}>Edit name</button>
        }

      <h2>Student Trend Chart</h2>  
      <StudentTrendChart data={scores} />
      {/* <pre>{JSON.stringify(scores,null,2)}</pre> */}
      <h2>Challenges</h2>
      <ul>
      
        {challenges.map(( node, index ) => {
          return (
            <li key={node.challenge.id}>
              <ChallengeResult  challenge={node.challenge} 
                                incorrect={node.incorrect_answers} 
                                correct={node.correct_answers} />
              <button type="button" onClick={() => { handleDelete(node.challenge.id, index) }} > Delete </button>
            </li>
          )})}
        
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
