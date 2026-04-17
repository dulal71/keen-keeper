import React from 'react';
import { IoCall } from "react-icons/io5";
const Call = ({call}) => {
    return (
        <div>
           {
                    call.map((t,index)=> <div className=' bg-white shadow-md p-5 my-5 rounded-lg  transform transition-transform duration-500 hover:scale-110' key={index}>
                       <p className='flex gap-2 items-center'><IoCall size={30} color='red' /> <span className='font-semibold'>Call</span> with <span className='font-bold'>{t.name}</span></p> 
                       <p>{new Date().toDateString()}</p> 
                       </div>)
                } 
        </div>
    );
};

export default Call;