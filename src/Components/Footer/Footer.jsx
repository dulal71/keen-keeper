import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
       <footer className="bg-[#244d3f] text-primary-content p-10">
 
  <div className='max-w-6xl mx-auto  flex flex-col items-center justify-center '>
   <div className='text-center '>
<h2 className='font-semibold text-3xl md:text-5xl mb-3'><span className='font-bold'>Keen</span>Keeper</h2>
    <p className="font-bold">
     Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most. 
    </p>
   </div>
    <nav className='text-center mt-5'>
    <h4 className='text-xl '>Social Links</h4>
    <div className=" flex justify-center items-center gap-4 mt-2">
 <FaFacebook size={30} />
<FaXTwitter size={30} />
<FaInstagram  size={30}/>
    </div>
  </nav>
    
  </div>
 
  <div className=' max-w-6xl mx-auto flex flex-col gap-3 md:flex-row justify-between items-center mt-5 p-3 border-t-1 border-gray-400'>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
          <ul className='flex gap-4 md:gap-8 items-center text-primary-content'>
            <li ><p>Privacy Policy</p></li>
            <li><p>Terms of Service</p></li>
            <li><p>Cookies</p></li>
          </ul>
  </div>
</footer>
    );
};

export default Footer;