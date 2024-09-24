import React from 'react'
import {motion} from "framer-motion"
import { fadeIn } from '../Variant'
const About = () => {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-[25px] space-y-10' id="About">
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
       
            <div className='md:w-1/2'>
            <motion.div variants={fadeIn("up",0.3)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}}> 
            <img src="https://img.freepik.com/free-photo/full-shot-smiley-woman-stretching_23-2148771183.jpg?ga=GA1.1.96519629.1680708603&semt=sph w-[700px] h-[280px]"></img>
            </motion.div>
            </div>
        
        <div className='md:w-2/5'>
        <motion.div variants={fadeIn("down",0.3)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}}> 
        <h1 className='text-4xl text-red-900 leading-normal'>Why we Are better than others</h1>
        <p className='font-semibold'>GOYAL BROTHERS PRAKASHAN Foundation Mathematics For Class- 8 (Icse Schools) By R.s. Aggarwal (Goyal Brothers Prakashan) (Paperback, R.S. AGGARWAL). 3 ratings.</p>
        </motion.div>
        </div>
        
        </div>



        <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
            <div className='md:w-1/2'>
            <motion.div variants={fadeIn("up",0.3)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}}>   
            <img src="https://img.freepik.com/free-photo/full-shot-smiley-woman-stretching_23-2148771183.jpg?ga=GA1.1.96519629.1680708603&semt=sph w-[400px] h-[280px]"></img>
            </motion.div>
            </div>
        
        <div className='md:w-2/5'>
        <motion.div variants={fadeIn("up",0.3)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}}> 
        <h1 className='text-4xl text-red-900 leading-normal'>Why we Are better than others</h1>
        <p className='font-semibold'>GOYAL BROTHERS PRAKASHAN Foundation Mathematics For Class- 8 (Icse Schools) By R.s. Aggarwal (Goyal Brothers Prakashan) (Paperback, R.S. AGGARWAL). 3 ratings.</p>
        </motion.div>
        </div>
        </div>
    </div>


</>
  )
}

export default About