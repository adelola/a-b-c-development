import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

const StudentShow = (props) => {
  const [student, setStudent] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const studentID = props.location.pathname

  const fetchData = async () => {
    const result = await Axios.get(`/api/classrooms/1${studentID}`);
      setStudent(result.data);
  };
  
  useEffect(() => {
      setIsLoading(false);
      fetchData();
  },[]);


  return (
    <React.Fragment>
      <h1>StudentShow</h1>
      <h2>{student.name} </h2>
      <div>
        <Link to={`/students/${student.id}/challenges`}>Take A Challenge</Link>
      </div>
    </React.Fragment>
  )
}

export default withRouter(StudentShow);
