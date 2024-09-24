import React from 'react'
import {motion} from "framer-motion"
import { fadeIn } from '../Variant'
const Content = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-[25px]'id="Feature">
        <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='md:w-1/4'>
            <motion.div variants={fadeIn("right",0.3)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}}> 
                <h1 className='text-4xl text-red-900'>Why we Are better than others</h1>
                <p className='font-semibold'>GOYAL BROTHERS PRAKASHAN Foundation Mathematics For Class- 8 (Icse Schools) By R.s. Aggarwal (Goyal Brothers Prakashan) (Paperback, R.S. AGGARWAL). 3 ratings.</p>
                </motion.div>
            </div>
            <motion.div variants={fadeIn("left",0.3)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.2}}> 
            <div className='w-full lg:w-3/4'>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-12 gap-8 tems-start'>
        
            <div className='card bg-base-100  shadow-xl md:w-72 rounded-[35px]  flex items-center-justify-center h-96 p-8 cursor-pointer hover:translate-y-4'>
          
                <img src="https://img.freepik.com/premium-vector/woman-yoga-meditation-pose-vector-illustration-good-mental-health-yoga-lifestyle-selfcare_135170-1601.jpg?ga=GA1.1.96519629.1680708603&semt=sph" className='w-[700px] h-[280px] shadow-3xl bg-[rgba(255,255,0,0.04)]'/>

            </div>
            <div className=' card bg-base-100 md:w-72  shadow-xl rounded-[35px]  flex items-center-justify-center h-96 p-8 cursor-pointer hover:translate-y-4 mt-[40px]'>
                <img src="https://img.freepik.com/premium-vector/woman-yoga-meditation-pose-vector-illustration-good-mental-health-yoga-lifestyle-selfcare_135170-1601.jpg?ga=GA1.1.96519629.1680708603&semt=sph" className='w-[700px] h-[280px]'/>

            </div>
            <div className='card bg-base-100  shadow-xl md:w-72  rounded-[35px]  flex items-center-justify-center h-96 p-8 cursor-pointer hover:translate-y-4'>
                <img src="https://img.freepik.com/premium-vector/woman-yoga-meditation-pose-vector-illustration-good-mental-health-yoga-lifestyle-selfcare_135170-1601.jpg?ga=GA1.1.96519629.1680708603&semt=sph" className='w-[700px] h-[280px]'/>

            </div>
            
            </div>
            
            </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Content