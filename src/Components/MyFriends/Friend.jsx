import React from 'react';
import { useNavigate } from 'react-router';

const Friend = ({friend}) => {
  const navigate = useNavigate();
  
  
    const {name,
        picture,
        days_since_contact,
        tags,
status,
id
    }=friend
    const details=(id)=>{
    navigate(`/details/${id}`)
  }
    return (
        <div onClick={()=>details(id)} className='bg-white p-5 flex flex-col items-center space-y-1 shadow'>
         <img className='w-20 rounded-full' src={picture} alt="" />
         <h4 className='font-bold text-xl'>{name}</h4>
         <p className='text-zinc-500 font-semibold'>{days_since_contact}d ago</p> 
         <div className='flex gap-2 items-center my-2'>
          {
            tags.map((tag,index)=> <p key={index} className='bg-green-200 px-2 rounded-full'>{tag}</p>)
          }  
            </div>  
         <p className={` px-3 rounded-full text-white ${status==='overdue'? 'bg-red-700':
          status==='almost due'? 'bg-amber-500': 'bg-green-800'}`}>{status}</p>
        </div>
    );
};

export default Friend;