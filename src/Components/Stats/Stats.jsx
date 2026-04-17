import React, { useContext } from 'react';
import { GlobalContext } from '../../ContextApi/ContextApi';
import Chart from './Chart'

const Stats = () => {
    const {timelineList}=useContext(GlobalContext)
    console.log(timelineList);
    return (
        <div className='max-w-5xl mx-auto min-h-[60vh] '>
            <h2 className='font-bold text-3xl mb-4'>Friendship Analytics</h2>
            <div className='bg-white shadow p-4 rounded-md'>
         <p className='font-bold text-xl'>By Interaction Type</p>
           {
          timelineList.length === 0? <h2 className='text-center'>No interaction</h2>: <Chart></Chart>
         }
            </div>
         
        </div>
    );
};

export default Stats;