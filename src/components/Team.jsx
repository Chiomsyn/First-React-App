import React from 'react';

import {PhoneIcon, ArrowSmRightIcon} from '@heroicons/react/outline';
import { ChipIcon, SupportIcon } from '@heroicons/react/solid';

import teamImg from '../assests/meeting.jpg'
  
const Team = () => {
  return (
    <div name="team" className='w-full mt-24'>
        <div className='w-full h-[700px] bg-gray-900/90 absolute'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={teamImg} alt="/" />
        </div>
        <div className='max-w-[1240px] mx-auto text-white relative'>
            <div className='px-4 py-12'>
                <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
                <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
                <p className='py-4 text-3xl text-slate-300 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum culpa iusto dolorem a inventore omnis molestiae repellendus neque. Nisi id similique quo veniam sequi possimus dolorum! Voluptatem est iure voluptatum.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-y-16 gap-x-8 px-4 pt-12 sm:pt-20 text-black'>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold text-2xl my-6'>Sales</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet voluptatibus aspernatur minus non deserunt dicta consequuntur aperiam assumenda deleniti.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex text-indigo-600 items-center'>Contact Us <ArrowSmRightIcon className='w-5 ml-2'/></p>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <SupportIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet voluptatibus aspernatur minus non deserunt dicta consequuntur aperiam assumenda deleniti.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex text-indigo-600 items-center'>Contact Us <ArrowSmRightIcon className='w-5 ml-2'/></p>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <ChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold text-2xl my-6'>Media Inquiries</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet voluptatibus aspernatur minus non deserunt dicta consequuntur aperiam assumenda deleniti.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex text-indigo-600 items-center'>Contact Us <ArrowSmRightIcon className='w-5 ml-2'/></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team
