import React, {  useState } from 'react';

import AllMethod from '../ContectMethod/AllMethod';
import Text from '../ContectMethod/Text';
import Call from '../ContectMethod/Call';
import VideoCall from '../ContectMethod/VideoCall';





const TimeLineHistory = ({data}) => {
    const { text,call,video}=data
   
    const [sort,setSort]=useState('all')
 
    
    return (
        <div className='max-w-3xl mx-auto'>
            <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl bg-linear-to-r from-[#244d3f] via-[#278163] to-[#34ac84] bg-clip-text text-transparent mb-2'>Timeline </h1>
            <div>
             <div className="dropdown dropdown-center ml-5">
  <div tabIndex={0} role="button" className="btn m-1">Filter timeline </div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm ">
    <li onClick={()=>setSort('all')}><a>All</a></li>
    <li onClick={()=>setSort('text')}><a>Text</a></li>
    <li onClick={()=>setSort('call')}><a>Call</a></li>
    <li onClick={()=>setSort('video')}><a>Video</a></li>
    <li onClick={()=>setSort('recent')}><a>Recent</a></li>
    
  </ul>
</div>
     
      
            </div>
            <div>
               {
              sort ==='text'?<Text text={text}></Text>
                 : sort==='call'? <Call call={call} ></Call>:
                 sort ==='video'?<VideoCall video={video}></VideoCall>:
                  <AllMethod></AllMethod>
               }
                
            </div>
        </div>
    );                   
};

export default TimeLineHistory;                 