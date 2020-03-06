import React, { useEffect } from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ClassroomTrendChart = (props) => {

  const legend = [{value: 'Most recent score of each student', type: 'line', id: 'ID01' }]
  const renderChart = (
    <ResponsiveContainer width="95%" height={400}>
      <BarChart width={675} height={400} data={props.data} margin={{ top: 5, right: 5, bottom: 10, left: 5 }}>
        <CartesianGrid stroke="#ccc " strokeDasharray="1 1" />
        <XAxis dataKey="student" />
        <YAxis />
        <Tooltip />
        <Legend payload={legend} />
        <Bar dataKey="score" stroke="#000" fill="#DDE589" isAnimationActive={true} label/>
      </BarChart>
    </ResponsiveContainer>
  );

  return(
    <div> 
      {renderChart}
    </div>
  )

}

export default ClassroomTrendChart