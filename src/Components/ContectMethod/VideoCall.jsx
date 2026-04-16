import React from 'react';
import { MdVideoCameraFront } from "react-icons/md";
const VideoCall = ({video}) => {
    return (
        <div>
           {
         video.map((t,index)=> <div className=' bg-white shadow-md p-5 my-5 rounded-lg transform transition-transform duration-500 hover:scale-110' key={index}>
<p className='flex gap-2 items-center'><MdVideoCameraFront size={30} color='blue' />  <span className='font-semibold'>Text</span> with <span className='font-bold'>{t.name}</span></p>
 <p>{new Date().toDateString()} </p> </div>)
         }    
        </div>
    );
};

export default VideoCall;