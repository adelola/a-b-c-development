import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const StudentTrendChart = (props) => {

  const fetchData = async () => {
    const result = await Axios.get(`/api/classrooms/1${studentPath}`);
        
  };
   
  useEffect(() => {
    fetchData();
  },[]);


}

export default StudentTrendChart