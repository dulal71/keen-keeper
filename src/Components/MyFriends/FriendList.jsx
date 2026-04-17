import React from 'react';
import LoadingSpinner from '../ExtraComponents/LoadingSpinner';

import Friend from './Friend';
const FriendList = ({friends}) => {

    return (
        <div>
          <div className='pt-5'>
<h2 className='font-bold text-3xl bg-linear-to-r from-[#244d3f] via-[#278163] to-[#34ac84] bg-clip-text text-transparent'>Your Friends</h2>
<div className='grid md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10'>
    {
     friends.map(friend=><Friend key={friend.id} friend={friend}></Friend>)
    }
</div>

          </div>  
        </div>
    );
};

export default FriendList;