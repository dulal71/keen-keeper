import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AiOutlineHome } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";
import { ImStatsDots } from "react-icons/im";
import './Nav.css'
import { RiCloseLargeLine } from "react-icons/ri";
import { TiThMenuOutline } from "react-icons/ti";
const Navbar = () => {
  const [open,setOpen]=useState(false)
    const links=<>
    <li><NavLink to='/'><AiOutlineHome />Home</NavLink></li>
    <li><NavLink to='/timeline'><IoMdTime />Timeline</NavLink></li>
    <li><NavLink to='/stats'><ImStatsDots />Stats</NavLink></li>
    
    
    </>
    return (
        <div className=' p-5 fixed left-0 right-0 top-0 shadow border-b-2 border-[#244d3f] bg-white z-50'>
          <div className='max-w-7xl mx-auto  flex justify-between items-center'>
            <div>
          <Link to='/'><span className=' font-bold text-3xl bg-linear-to-r from-[#244d3f] via-[#278163] to-[#34ac84] bg-clip-text text-transparent'>KeenKeeper</span></Link>  
            </div>  
          <div className='hidden md:flex gap-3'>
            {links}
          </div>
          <div className='relative md:hidden'>
            {
              open?<RiCloseLargeLine onClick={()=>setOpen(false)} size={30} color='red'/> :<TiThMenuOutline onClick={()=>setOpen(true)} size={30} color='#244d3f'/>
            }
            <ul className={`flex flex-col top-[65px] gap-3 p-4 h-screen w-48  transform transition-transform duration-500 bg-white absolute ${open? '-right-7' : 'translate-x-full'}`}>
 {links}
            </ul>
           
          </div>

          </div>
        </div>
    );
};

export default Navbar;