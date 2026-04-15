import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root';
import HomePage from '../Components/HomePage/HomePage';
import Timeline from '../Components/Timeline/Timeline';
import Stats from '../Components/Stats/Stats';
import FriendsDetails from '../Components/MyFriends/FriendsDetails';
export const router=createBrowserRouter([
{
    path:'/',
    element:<Root></Root>,
    children:[
        {
            index:true, element:<HomePage></HomePage>
        },
        {
        path:'timeline' ,
        element:<Timeline></Timeline>
        },
        {
            path:'stats',
            element:<Stats></Stats>
        },
        {
            path:'details/:id',
            element:<FriendsDetails></FriendsDetails>
        }
    ]
    
}
])

export default router;