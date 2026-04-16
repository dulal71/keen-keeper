import React, { useContext } from 'react';
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { GlobalContext } from '../../ContextApi/ContextApi';


// Sample data


const Stats = () => {
   const {timelineList,
      setTimelineList,
     text,
     setText,
     call,
     setCall,
     video,setVideo}=useContext(GlobalContext)
 const data = [
  { name: 'Text', value: text.length, fill: '#0088FE' },
  { name: 'Call', value:call.length, fill: '#00C49F' },
  { name: 'video', value:video.length, fill: '#FFBB28' }
 
];
 
 
     return (
    <div className=' max-w-5xl mx-auto '>
        <h2 className='font-bold text-3xl mb-4'>Friendship Analytics</h2>
<div className='bg-white shadow p-4 rounded-md'>
     <p className='font-bold text-xl'>By Interaction Type</p>
     <div style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}>
      
      <ResponsiveContainer width="100%" aspect={1}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={80}
            outerRadius={120}
            paddingAngle={5}
            cornerRadius={10}
          />
            <Tooltip></Tooltip>
            <Legend></Legend>
        </PieChart>
      
      </ResponsiveContainer>

     
    </div>
</div>
    </div>
   
  );
};

export default Stats;