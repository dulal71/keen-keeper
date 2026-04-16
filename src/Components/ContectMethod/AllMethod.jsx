import React, { useContext } from 'react';
import { GlobalContext } from '../../ContextApi/ContextApi';
import Text from './Text';
import Call from './Call';
import VideoCall from './VideoCall';

const AllMethod = () => {
    const {text,call,video}=useContext(GlobalContext)
     const d= new Date()
    return (
        <div>
         <Text text={text} d={d}></Text>
          <Call call={call}  d={d}></Call>      
           <VideoCall video={video} d={d}></VideoCall>    
        </div>
    );
};

export default AllMethod;