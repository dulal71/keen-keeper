import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <div className='bg-base-200'>
            <Navbar></Navbar>
            <div className='mt-24 p-5'>
<Outlet></Outlet>
            </div>
         <Footer></Footer> 
        </div>
    );
};

export default Root;