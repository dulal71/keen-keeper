import React, { useContext } from 'react';
import { GlobalContext } from '../../ContextApi/ContextApi';
import EmptyMessage from '../ExtraComponents/EmptyMessage';
import TimeLineHistory from './TimeLineHistory';


const Timeline = () => {
    const {timelineList,
    setTimelineList,
   text,
   setText,
   call,
   setCall,
   video,setVideo}=useContext(GlobalContext)
   const data ={
    timelineList,
    setTimelineList,
   text,
   setText,
   call,
   setCall,
   video,setVideo
   }
   console.log(timelineList);
    return (
        <div className='min-h-[53vh]'>
          {
            timelineList.length===0?<EmptyMessage></EmptyMessage>:<TimeLineHistory data={data}></TimeLineHistory>
          }
        </div>
    );
};

export default Timeline;