import React from 'react';
import { FaPlus } from "react-icons/fa6";
const Banner = () => {
    return (
        <div className='container mx-auto text-center p-5 space-y-5'>
         <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl bg-linear-to-r from-[#244d3f] via-[#278163] to-[#34ac84] bg-clip-text text-transparent'>Friends to keep close in your life</h1> 
         <p className='text-gray-700 text-xl font-semibold'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.</p> 
<button className='btn bg-[#244d3f] text-white'><span className='flex items-center gap-2'><FaPlus />Add a Friend</span></button>
        </div>
    );
};

export default Banner;