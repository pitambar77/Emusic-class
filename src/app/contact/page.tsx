import { Meteors } from '@/components/ui/meteors'

import React from 'react'

const page = () => {
  return (
   

    <div className='  md:h-[40rem] bg-slate-900 flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 '>     
        <div className=' mt-28'>
            <h2 className=" text-lg md:text-7xl text-center font-sans font-semibold mb-8  text-white">Contact Us</h2>
            <p className=' mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>Contact us is a phrase used to invite people to get in touch with a business or organization. It is often used on a website as a page that allows visitors to contact the website's owners.</p>
        </div>
        <form action="">
            <div className=' flex flex-col'>
                <input className=' bg-transparent border border-gray-400 rounded-sm p-2 mt-10 mb-8 ' type="email"  placeholder='your email address' />
                <textarea  className=' bg-transparent border border-gray-400 rounded-sm p-2' name="" id="" placeholder=' message'></textarea>
                <button className='  px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200 mt-10'>send message</button>
            </div>
        </form>
        <Meteors number={60}/>
    </div>

   
  )
}

export default page