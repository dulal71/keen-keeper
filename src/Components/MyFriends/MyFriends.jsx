import React from 'react';
import './friend.css'
import Friend from './Friend';
import useData from '../../Hook/DataFetch';
import LoadingSpinner from '../ExtraComponents/LoadingSpinner';
import FriendList from './FriendList';

const MyFriends = () => {
        const {friends,loading}=useData()
    console.log(friends);
    return (
        <div className='max-w-7xl mx-auto mt-10'>
            {/* //card */}
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8 border-b-2 border-gray-300 pb-8'>

          <div className='bg-white p-8 text-center shadow rounded-md box'>
          <span className='font-semibold text-red-800 text-2xl'>{friends.length}</span>
          <p className='text-xl font-bold'>Total Friends</p>  
            </div>  
          <div className='bg-white p-8 text-center shadow rounded-md box'>
          <span className='font-semibold text-amber-600 text-2xl'>3</span>
          <p className='text-xl font-bold'>On Track</p>  
            </div>  
          <div className='bg-white p-8 text-center shadow rounded-md box'>
          <span className='font-semibold text-2xl text-green-900'>3</span>
          <p className='text-xl font-bold'>Need Attention</p>  
            </div>  
          
          <div className='bg-white p-8 text-center shadow rounded-md box'>
          <span className='font-semibold text-2xl text-blue-800'>1</span>
          <p className='text-xl font-bold'>Interactions This Month</p>  
            </div>  
          
            
            </div>  
         {/* //friends    */}
        
          {
loading? <LoadingSpinner></LoadingSpinner>:<FriendList friends={friends}></FriendList>
          }
        </div>
    );
};

export default MyFriends;