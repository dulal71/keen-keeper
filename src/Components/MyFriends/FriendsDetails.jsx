import React from 'react';

import useData from '../../Hook/DataFetch';
import LoadingSpinner from '../ExtraComponents/LoadingSpinner';
import Detail from './Detail';

const FriendsDetails = () => {
    const  {friends,loading}=useData()
    return (
      <div>
{
  loading? <LoadingSpinner></LoadingSpinner>: <Detail friends={friends}></Detail>
}
      </div>
         
      
    );
};

export default FriendsDetails;