import React, { useContext } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useParams } from 'react-router';
import { BiAlarmSnooze } from "react-icons/bi";
import { PiArchiveLight } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { MdOutlineTextsms } from "react-icons/md";
import { FaVideo } from "react-icons/fa6";
import { GlobalContext } from '../../ContextApi/ContextApi';
import { toast } from 'react-toastify';
const Detail = ({friends}) => {
    const {timelineList,
    setTimelineList,
   text,
   setText,
   call,
   setCall,
   video,setVideo}=useContext(GlobalContext)
    const {id} = useParams()
  const filterFriend = friends.find(friend=>friend.id ==id)
 const {name,picture,tags,bio,email,status,
goal,next_due_date,days_since_contact
}=filterFriend

const textMessage=(friend)=>{
    const newText = [...text,friend]
    setText(newText)
    toast.success(`Text with ${name} `)
    setTimelineList([...timelineList,friend])

}
const callMessage=(friend)=>{
    const newCall = [...call,friend]
    setCall(newCall)
    toast.success(`Call with ${name} `)
    setTimelineList([...timelineList,friend])

}
const videoCall=(friend)=>{
    const newVideo = [...video,friend]
    setVideo(newVideo)
    toast.success(`video call with ${name} `)
    setTimelineList([...timelineList,friend])

}
    return (
      <div className='max-w-6xl  mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-2 md:gap-10 '>
     {/* Profile */}
      <div className='col-span-1 space-y-2 '>
<div className='bg-white p-3 flex flex-col items-center space-y-1 shadow-md rounded-md'>
           <img className='w-24 rounded-full' src={picture} alt="" />
  <h3  className='font-bold text-xl'>{name}</h3>
   <p className={` px-3 rounded-full text-white ${status==='overdue'? 'bg-red-700':
          status==='almost due'? 'bg-amber-500': 'bg-green-800'}`}>{status}</p>
  <div className='flex gap-2 items-center my-2'>
          {
            tags.map((tag,index)=> <p key={index} className='bg-green-200 px-2 rounded-full'>{tag}</p>)
          }  
            </div>
            <p className='text-center truncate w-60'>{bio}</p>
            <p className='font-semibold'>{email}</p>
            <Link to='/'><FaArrowLeftLong /></Link>

</div>
 {/* button */}
<div className='space-y-3'>
  <div className='bg-white p-4  flex justify-center gap-2 items-center shadow-md  rounded-lg'>
 <BiAlarmSnooze />
 <button className='font-semibold'>Snooze 2 weeks</button> 
  </div>

  <div  className='bg-white p-4 flex justify-center gap-2 items-center shadow-md  rounded-lg'>
<PiArchiveLight />
<button className='font-semibold'>Archive</button>  
  </div>

  <div  className='bg-white p-4 flex justify-center gap-2 items-center shadow-md rounded-lg'>
<RiDeleteBin6Line />
<button className='font-semibold text-red-500'>Delete</button>  
  </div>
  
  
</div>
      </div>
  <div className='col-span-2 flex flex-col gap-13'>

  {/* Top Stats */}
  <div className='flex flex-col md:flex-row gap-4'>
    
    {/* Days Since Contact */}
    <div className='bg-white flex-1 p-6 text-center shadow-md rounded-xl'>
      <span className='text-3xl font-bold text-primary'>
        {days_since_contact}
      </span>
      <p className='text-sm text-gray-500 mt-1'>Days Since Contact</p>
    </div>

    {/* Goal */}
    <div className='bg-white flex-1 p-6 text-center shadow-md rounded-xl'>
      <span className='text-3xl font-bold text-black'>
        {goal}
      </span>
      <p className='text-sm text-gray-500 mt-1'>Goal (Days)</p>
    </div>

    {/* Next Due */}
    <div className='bg-white flex-1 p-6 text-center shadow-md rounded-xl'>
      <span className='text-3xl font-bold text-accent-content'>
        {next_due_date}
      </span>
      <p className='text-sm text-gray-500 mt-1'>Next Due</p>
    </div>

  </div>

  {/* Relationship Goal */}
  <div className='bg-white p-5 shadow-md rounded-xl flex justify-between items-center'>
    <div>
      <p className='font-semibold text-lg'>Relationship Goal</p>
      <p className='text-gray-500 text-sm'>Connect every 30 days</p>
    </div>

    <button className='btn btn-primary btn-sm rounded-lg'>
      Edit
    </button>
  </div>

  {/* Quick Check-In */}
  <div className='bg-white p-5 shadow-md rounded-xl'>
    <p className='font-semibold text-lg mb-4'>Quick Check-In</p>

    <div className='flex flex-col md:flex-row gap-4'>
      
      <div onClick={()=>callMessage(filterFriend)} className='flex-1 bg-base-200 rounded-xl py-6 flex justify-center gap-2 items-center  cursor-pointer hover:bg-base-300 transition'>
       <IoCall color='red' size={25}/>  <p className='font-medium'>Call</p>
      </div>

      <div onClick={()=>textMessage(filterFriend)} className='flex-1 bg-base-200 rounded-xl py-6  flex justify-center gap-2 items-center cursor-pointer hover:bg-base-300 transition'>
        <MdOutlineTextsms color='blue' size={25}/> <p className='font-medium'>Text</p>
      </div>

      <div onClick={()=>videoCall(filterFriend)} className='flex-1 bg-base-200 rounded-xl py-6 flex justify-center gap-2 items-center cursor-pointer hover:bg-base-300 transition'>
        <FaVideo color='orange' size={25}/><p className='font-medium'> Video</p>
      </div>

    </div>
  </div>
</div>
  
      </div>  
    );
};

export default Detail;