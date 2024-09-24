import React, { useState } from 'react'
import logo from "../assets/logo.jpg"
import { GrLanguage } from "react-icons/gr";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import {Link} from "react-scroll"
const Navbar = () => {
    const[togg,setTogg]=useState(false)

    const toggleOpen=()=>{
        setTogg(!togg)
    }
    const navItem=[
        {link:"Overview",path:"home"},
        {link:"Feature",path:"Feature"},
        {link:"About",path:"About"},
        {link:"Pricing",path:"Pricing"},

    ]
  return (
    <>
    <nav className='max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 dark:bg-slate-900 dark:text-white h-[60px] items-center justify-center '>
        <div className='flex justify-between items-center mt-3' >
            <div className='flex items-center space-x-3'>
                <a href="/" className='text-2xl font-semibold flex items-center space-x-3'><img src={logo} className='w-[40px] inline-block items-center'/><span>Logo</span></a>

                <ul className='md:flex space-x-12  items-center hidden cursor-pointer'>
                    {
                        navItem.map(({link,path})=>
                            <Link activeClass='active' spy={true} smooth={true} offset={-100} key={link} to={path} className='block hover:text-red-300'>{link}</Link>
                        )
                    }
                </ul>
            </div>
<div className='space-x-12 items-center md:flex'>
    <a href='/' className=' lg:flex items-center hidden'><GrLanguage className='mr-2'/><span>Language</span></a>
    <button className='rounded px-4 py-white bg-secondary hover:text-white'>Sign Up</button>
</div>
<div className='md:hidden'>
            <button onClick={toggleOpen} className='text-white focus:outline-none focus:text-grey-300'>
            {
                togg ? (<FaXmark  className='w-6 h-6'/>):(<FaBars />)
            }
            </button>
        </div>
        </div>
        
    </nav>
    <div className={`space-y-4 px-4 pb-5 px-4 pt-24  ${togg? "block bg-slate-300 top-0 right-0 fixed ":"hidden"}`}>
    {
                        navItem.map(({link,path})=>
                       

                        <Link activeClass='active' spy={true} smooth={true} offset={-100} key={link} to={path} className='block hover:text-red-300' onClick={toggleOpen}>{link}</Link>
                        )
                    }
    </div>
    </>
  )
 
}

export default Navbar