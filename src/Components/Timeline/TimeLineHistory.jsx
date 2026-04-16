import React, { useEffect, useState } from 'react';
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdVideoCameraFront } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";

const TimeLineHistory = ({data}) => {
    const {  timelineList,
    setTimelineList,
   text,
   setText,
   call,
   setCall,
   video,setVideo}=data
    const d= new Date()
    const [sort,setSort]=useState('')
    useEffect(() => {
    if (sort === 'text') {
        setCall([]);
        setVideo([]);
    } 
    else if (sort === 'call') {
        setText([]);
        setVideo([]);
    } 
    else if (sort === 'video') {
        setCall([]);
        setText([]);
    }
},
 []);
    
    return (
        <div className='max-w-3xl mx-auto'>
            <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl bg-linear-to-r from-[#244d3f] via-[#278163] to-[#34ac84] bg-clip-text text-transparent mb-2'>Timeline </h1>
            <div>
             <div className="dropdown dropdown-center">
  <div tabIndex={0} role="button" className="btn m-1">Filter timeline <MdOutlineArrowDropDown /></div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={()=>setSort('text')}><a>Text</a></li>
    <li onClick={()=>setSort('call')}><a>Call</a></li>
    <li onClick={()=>setSort('video')}><a>Video</a></li>
    <li onClick={()=>setSort('recent')}><a>Recent</a></li>
    
  </ul>
</div>
     
      
            </div>
            <div>
                {
                    text.map((t,index)=> <div className=' bg-white shadow-md p-5 my-5 rounded-lg transform transition-transform duration-500 hover:scale-110' key={index}>
                       <p className='flex gap-2 items-center'><AiOutlineMessage size={30} color='blue' /> <span className='font-semibold'>Text</span> with <span className='font-bold'>{t.name}</span></p>
                       <p>{d.toDateString()}</p> </div>)
                }
                {
                    call.map((t,index)=> <div className=' bg-white shadow-md p-5 my-5 rounded-lg  transform transition-transform duration-500 hover:scale-110' key={index}>
                       <p className='flex gap-2 items-center'><IoCall size={30} color='red' /> <span className='font-semibold'>Call</span> with <span className='font-bold'>{t.name}</span></p> 
                       <p>{d.toDateString()}</p> 
                       </div>)
                }
                {
                    video.map((t,index)=> <div className='  bg-white shadow-md p-5 my-5 rounded-lg  transform transition-transform duration-500 hover:scale-110' key={index}>
                       <p className='flex gap-2 items-center'><MdVideoCameraFront size={30} color='orange' /><span className='font-semibold'>Video</span>  with <span className='font-bold'>{t.name}</span></p> 
                        <p>{d.toDateString()}</p> </div>)
                }
            </div>
        </div>
    );                   
};

export default TimeLineHistory;                 