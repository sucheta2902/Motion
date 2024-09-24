import React from 'react'
import download from "../assets/download.png"
import {motion} from "framer-motion"
import { fadeIn } from '../Variant'
const Banner = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  'id='home'>
        <div className='rounded rounded-br-[80px] px-4 py-9 md:p-9 bg-secondary gradientBg  '>
        <div className='flex md:flex-row flex-col justify-between gap-10 items-center mt-5'>
            <div className='md:order-2 mt-6'>
            <motion.div variants={fadeIn("down",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}}> 
           <img src={download} className='w-[400px] h-[380px]'/></motion.div>
              
             </div>
            <div className='md:order-1 md:w-3/5 '>
            <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}}> 
            <h1 className='font-bold text-red-800 text-4xl md:text-7xl '>Develop Your Skills Without Dilligens</h1>
            <p className=' mt-2' >lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
            <div className='space-x-5 space-y-4 mt-6'>
            <button className='rounded px-5 py-3 bg-pink hover:text-white cursor-pointer '>Get Started</button>
            <butoon className='rounded px-5 py-3 py-white bg-pink hover:text-white cursor-pointer'>Remove</butoon></div>
            </motion.div>
            </div>
           
        </div>
        </div>
    </div>
  )
}

export default Banner