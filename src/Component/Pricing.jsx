import React, { useState } from 'react'
import {motion} from "framer-motion"
import { fadeIn } from '../Variant'
const Pricing = () => {
    const [yearly,setYear]=useState(false);
    const pri=[
        {name:"Start",monthlyPrice:19,yearlyPrice:199,description:"A common from lorem lorem lorem sit conducting lorem lorem lorem lorem."},
        {name:"Advance",monthlyPrice:85,yearlyPrice:299,description:"A common from lorem lorem lorem sit conducting lorem lorem lorem lorem."},
        {name:"Premium",monthlyPrice:58,yearlyPrice:199,description:"A common from lorem lorem lorem sit conducting lorem lorem lorem lorem."},

    ]
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-[25px]' id="Pricing">
        <div>
            <div className='text-center'>
                <h2 className='text-4xl'>Here Are all plan</h2>
                <p className='md:w-1/3 mx-auto px-4 text-tartiary'>Chandigarh is indeed a clean and safe city, it is indigenously famous for its architecture, making it perfect for travelers. It offers an exceptional environment and is a growing IT</p>
              <div className='mt-16'>
                <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
                <span className='text-2xl mr-8'>Monthly</span>
                <div className='w-14 h-6 rounded-full bg-gray-900 transition duration-200 ease-in-out'>
<div className={`w-14 h-6 rounded-full bg-gray-300 transition duration-200 ease-in-out ${yearly ? "bg-primary ml-8":"bg-gray-500 "}`}></div>
                </div>
                <span className='text-2xl ml-8'>Yearly</span>
                </label>
                <input type="checkbox" id="toggle" className='hidden' checked={yearly} onChange={()=>setYear(!yearly)}/>
              </div>
            </div>
            <motion.div variants={fadeIn("up",0.3)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.2}}> 
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 h-[250px]'>
           
                {pri.map((pkg,index)=>
<div key={index} className='border rounded-lg shadow-3xl px-14 py-10'>
    <h3 className='text-center font-semibold mt-5'>{pkg.name}</h3>
    <p className='text-center my-5'>{pkg.description}</p>
    <p className='text-center mt-5 text-primary font-bold text-4xl'>{yearly ? `$${pkg.yearlyPrice}`: `$${pkg.monthlyPrice}`}
        <span className='font-medium text-tartiary text-base '>/{yearly ?"year" :"month"}</span>
    </p>
    <ul className='mt-4 space-y-2 px-4 items-center content-center '>
        <li  className='items- '>video</li>
        <li   className='items-center'>video</li>
        <li  className='items-center ' >video</li>
        <li  className='items-center '>video</li>
        <li  className='items-center '>video</li>
    </ul>
    <div className='w-full mt-5 mx-auto flex justify-center outline-none'>
        <button className='mx-auto px-8 py-4 rounded bg-pink text-black  items-center justify-center mx-auto text-center content-center'>Get Start</button>
        </div>
</div>
                )}
                
            </div>
            </motion.div>
        </div>
        
    </div>
  )
}

export default Pricing