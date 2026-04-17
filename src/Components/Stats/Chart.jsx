import React, { useContext } from 'react';
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { GlobalContext } from '../../ContextApi/ContextApi';



// Sample data


const Chart = () => {
  const {text,call,video}=useContext(GlobalContext)
 const data = [
  { name: 'Text', value: text.length, fill: '#7E35E1' },
  { name: 'Call', value:call.length, fill: '#244D3F' },
  { name: 'video', value:video.length, fill: '#37A163' }
 
];
 
 
     return (
    
        
<div className=''>

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
   
   
  );
};

export default Chart;