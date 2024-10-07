import React from 'react'
import {CiFacebook} from "react-icons/ci"
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className=' bg-[#99c8d0]'>
    <div className='flex items-center justify-between'>
    <h1 className='font-bold text-xl'>Hire<span>Hustle</span></h1>
    <div className='flex text-2xl mx-5 gap-4'>
    <a href='http://facebook.com' className='hover:text-[#30ffee]' area-lanel="Facebook">
    <CiFacebook/>
    </a>
    <a href='http://instagram.com' className='hover:text-[#30ffee]' area-label="Instagram">
    <FaInstagram/>
    </a>
    <a href='http://x.com'
     className='hover:text-[#30ffee]' area-lanel="Twitter">
    <FaXTwitter/>
    </a>
    <a href='http://youtube.com' className='hover:text-[#30ffee]' area-lanel="Youtube">
    <FaYoutube />
    </a>    
    </div>
    
    </div>
    <div className='text-center p-5 grid grid-cols-3 gap-x-0'>
     <h1 className='font-bold'>Services</h1>
     <h1 className='font-bold'>About us</h1>
     <h1 className='font-bold'>Social</h1>
     <h1 className='text-sm'>Hiring</h1>
     <h1 className='text-sm'>Careers</h1>
     <h1 className='text-sm'>Instagram</h1>
     <h1 className='text-sm'>Resume Builder</h1>
     <h1 className='text-sm'>Contact</h1>
     <h1 className='text-sm'>Facebook</h1>
     <h1 className='text-sm'>Open to work</h1>
     <h1 className='text-sm'>Location</h1>
     <h1 className='text-sm'>Twitter</h1>
    </div>
    <h1 className='italic font-light text-center font-serif text-xs'> Copyright© 2024 HireHustel. All rights reserved</h1>
    </div>
  )
}

export default Footer