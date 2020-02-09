import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import ChallengeResult from './ChallengeResult';
import EditStudent from './forms/EditStudent';
import styles from './../stylesheets/components/studentshow'
import StudentTrendChart from './StudentTrendChart';
import * as Moment from 'moment'

const StudentShow = (props) => {
  const [student, setStudent] = useState("")
  const [challenges, setChallenges] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [showEdit, setShowEdit] =  useState(false);
    
  const scores = challenges.reverse().map(x => (
    { date: Moment(x.challenge.date).format('MMM Do'), 
      score: x.challenge.score}))

  const fetchData = async (path) => {
    const result = await Axios.get(`/api/classrooms/1${path}`);
      setStudent(result.data.student);
      setChallenges(result.data.challenges);
  };
  
  useEffect(() => {
    fetchData(props.location.pathname);
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
    <div className={styles.studentShow}>
      <div className={styles.titleSection}>
        {titleSection} 
        { !showEdit &&
          <button type="button" onClick={startEdit}>Edit name</button>
        }
      </div>

      { challenges.length > 0 && 
      <div className={styles.studentChart}>
        <h2>Student Trend Chart</h2>  
        <StudentTrendChart data={scores} />
      </div>
      }

      <div className={styles.addChallenge}>
        <Link to={{pathname: "/challenges/new",
              state: { student: student.id, classroom: student.classroom_id  }
              }}
        
        >Take A Challenge</Link>
      </div>

      { challenges.length > 0 &&
      <div className={styles.challengeList}>
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
      </div>
      }
    </div>
  )
}

export default withRouter(StudentShow);
