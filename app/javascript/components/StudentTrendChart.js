import React from 'react';
import { AreaChart, Area, linearGradient, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const StudentTrendChart = (props) => {
 
  const renderChart = (
    <ResponsiveContainer width="95%" height={400}>
      <AreaChart width={400} height={400} data={props.data} margin={{ top: 5, right: 10, bottom: 5, left: 10 }}>
        <defs>
          <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="1.4" stopColor="#A2E5D4" stopOpacity={0.6} />
              <stop offset="1" stopColor="red" stopOpacity={0.6} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="#ccc " strokeDasharray="1 1" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="score" stroke="#000" fill="url(#splitColor)" fillOpacity={1} dot={{ stroke: 'black', strokeWidth: 1 }} isAnimationActive={true} animationEasing="ease-in-out" />
      </AreaChart>
    </ResponsiveContainer>
  );

  return(
    <div> 
      {renderChart}
    </div>
  )

}

export default StudentTrendChart