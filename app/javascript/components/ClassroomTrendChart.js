import React, { useEffect } from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const ClassroomTrendChart = (props) => {

  const renderChart = (
    <BarChart width={675} height={400} data={props.data} margin={{ top: 5, right: 5, bottom: 10, left: 5 }}>
      <CartesianGrid stroke="#ccc " strokeDasharray="1 1" />
      <XAxis dataKey="student" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="score" stroke="#000" fill="#DDE589" isAnimationActive={true} label/>
    </BarChart>
  );

  return(
    <div> 
      {renderChart}
    </div>
  )

}

export default ClassroomTrendChart