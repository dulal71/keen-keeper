import React, { createContext, useState } from 'react';
export const GlobalContext =createContext()
const ContextApi = ({children}) => {
const [timelineList,setTimelineList]=useState([])
const [text,setText]=useState([])
const [call,setCall]=useState([])
const [video,setVideo]=useState([])
const data ={
    timelineList,
    setTimelineList,
   text,
   setText,
   call,
   setCall,
   video,setVideo
}
    return <GlobalContext.Provider value={data}>
     {children}   
    </GlobalContext.Provider>
};

export default ContextApi;