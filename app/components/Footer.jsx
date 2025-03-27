import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='max-w-[1170px] text-zinc-200 mx-auto flex flex-col md:flex-row items-center gap-4 justify-between w-full py-5 px-6'>
        <span className='text-center text-[15px]'>© 2025 Aysenur Tatli. All Rights Reserved.</span>
        <div className='flex items-center gap-[16px]'>
            <a href="#" className='hover:text-zinc-400 duration-200'><FaLinkedin size={25} /></a>
            <a href="#" className='hover:text-zinc-400 duration-200'><FaBehanceSquare size={25}/></a>
            <a href="#" className='hover:text-zinc-400 duration-200'><FaGithub size={25}/></a>
        </div>
    </footer>
  )
}

export default Footer