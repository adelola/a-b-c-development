import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import ChallengeResult from './ChallengeResult';
import EditStudent from './forms/EditStudent';
import styles from './../stylesheets/components/studentshow.module.scss';
import StudentTrendChart from './StudentTrendChart';
import * as Moment from 'moment';
import AlphabetProgressChart from './AlphabetProgressChart';
import Pencil from '../images/noun_edit_1911367color.svg';
import MountainPeak from '../images/mountain.svg';
import Trashcan from '../images/noun_Trash_1651259.svg';
import SmartFolder from '../images/smart_folder.svg';
import EmptyStateImg from '../images/empty_challenge.svg';

const StudentShow = (props) => {
  const [student, setStudent] = useState("")
  const [challenges, setChallenges] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [deleteMessage, setDeleteMessage] = useState("")
  const [showEdit, setShowEdit] =  useState(false)
  const [blueColorRange, setBlueColorRange] = useState([])
  const [scores, setScores] = useState([])
    
  const colorGenerator = (length) => {        //For assigning background colors to the challenge result cards   to give an ombre effect to the set 
    const numberRange = Array.from({length: 87}, (el, index) => index)
    let arr = [];
    let maxVal = length;
    let delta = Math.floor( numberRange.length / maxVal );
    for (let i = 0; i < numberRange.length; i=i+delta) {
      arr.push(numberRange[i]);
    }
    setBlueColorRange(arr.reverse());
  }

  const updateScores = (challenges) => { 
    setScores([...challenges].reverse().map(x => (      //Creating json data from past challenges for Student Trend Chart component
    { date: Moment(x.challenge.date).format('MMM Do'), 
      score: x.challenge.score})
    ))
  };

  const fetchData = async (path) => {      //Fetching the student's info and challenge results
    const result = await Axios.get(`/api/classrooms/1${path}`);
      setStudent(result.data.student);
      setChallenges(result.data.challenges);
      updateScores(result.data.challenges);
      colorGenerator(result.data.challenges.length);
  };

  useEffect(() => {
    fetchData(props.location.pathname);
    setIsLoading(false);
  },[showEdit, setShowEdit, deleteMessage, setDeleteMessage]);

  const handleDelete = (id) => {
    const deleteChallenge = async (id) => {
      const result = await Axios.delete(`/api/classrooms/${student.classroom_id}/students/${student.id}/challenges/${id}`)
      setDeleteMessage(result.data);
    };
    if (confirm("All data for this challenge will deleted. Proceed?")) {
      deleteChallenge(id)
    }
  };

  const startEdit = () => {     
    setShowEdit(true);
  }
  const cancelEdit = () => {
    setShowEdit(false)
  }

  let titleSection;
  if (showEdit) {    //Toggles showing the edit form when student name is to be changed
    titleSection = <EditStudent inputs={student.name} id={student.id} classID={student.classroom_id} cancel={cancelEdit} />;
  } else {
    titleSection =  <h1>{student.name}</h1>;
  }

  return (
    <div className={styles.studentShow}>
      <div className={styles.titleSection}>
        {titleSection} 
        { !showEdit &&
          <button type="button" onClick={startEdit}>
            <Pencil width={50} height={50}/>
          </button>
        }
      </div>
      { !isLoading && challenges.length === 0 && 
        <React.Fragment>
          <p className={styles.intro}>{student.name}'s challenge results and progress charts will appear here. To get started, administer an alphabet challenge.</p>
          <div className={styles.emptyState}>
            <EmptyStateImg height={400} width={400} />
          </div>
        </React.Fragment>
      }
      
      <div className={styles.addChallenge}>
        <Link to={{pathname: "/challenges/new",
            state: { student: student.id, classroom: student.classroom_id  }
            }}>
          <button type="button">Start A Challenge</button>
        </Link>
      </div>
    
      { challenges.length > 0 && 
        <React.Fragment>
          <div className={styles.studentChart}>
            <StudentTrendChart data={scores} />
          </div>

          <div className={styles.alphabetChart}>
            {student.id &&
              <AlphabetProgressChart studentID={student.id} classroomID={student.classroom_id} case_type="Uppercase" trigger={deleteMessage}/>
            }
          </div>
          
          <div className={styles.challengeList}>
            <span className={styles.challengesTitle}>
              <MountainPeak height={100} width={100} />
              <h2>Completed Challenges</h2>
            </span>
            <ul className={styles.challengesWrapper}>
              {challenges.map(( node, index ) => {
                return (
                  <li key={node.challenge.id} className={`${styles.challenge}`} 
                      style={{background: `linear-gradient(217deg,rgb(252, 106, ${blueColorRange[index]}), rgb(255, 176, 134))`}}>
                    <button type="button" className="cursor-pointer z-10" onClick={() => { handleDelete(node.challenge.id)}}> <Trashcan height={40} width={40} /> </button>
                    <ChallengeResult  challenge={node.challenge}
                                      className = {styles.challengeresult} 
                                      incorrect={node.incorrect_answers} 
                                      correct={node.correct_answers} />
                  </li>
                )})}        
            </ul>
          </div>
        </React.Fragment>
      }
    </div>
  )
}

export default withRouter(StudentShow);
