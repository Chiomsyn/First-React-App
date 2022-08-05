import React from 'react'
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'

import bgImg from '../assests/develop.svg'

const Hero = () => {
  return (
    <div name="home" className='w-full lg:h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid my-[90px] mx-4 md:grid-cols-2 max-w-[1240px]'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>Unique Sequencing & production</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
                <p className='text-2xl'>This is our tech brand</p>
                <button className='py-3 px-6 my-4 sm:w-[60%]'>Get Started</button>
            </div>
            <div>
            <img className='w-full mt-8' src={bgImg} alt="/" />
        </div>
        <div className='absolute flex flex-col py-8 bottom-[-10%] md:min-w-[760px]
        mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
        border border-slate-300 rounded-xl text-center shadow-xl'>
            <p className='text-xl font-bold'>Data Services</p>
            <div className='flex justify-between flex-wrap px-4'>
                <p className='flex px-4 py-2 text-slate-500'><DatabaseIcon className='h-6 text-indigo-600'/> Dashboard Design</p>
                <p className='flex px-4 py-2 text-slate-500'><ServerIcon className='h-6 text-indigo-600'/> Cloud Data</p>
                <p className='flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className='h-6 text-indigo-600'/> API</p>
                <p className='flex px-4 py-2 text-slate-500'><CloudUploadIcon className='h-6 text-indigo-600'/> App Security</p>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Hero
