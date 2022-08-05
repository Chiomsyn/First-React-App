import React, {useState} from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import {Link, animateScroll as scroll} from 'react-scroll';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className=' px-5 w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold mr-4'>BRAND.</h1>
                    <ul className='hidden md:flex'>
                        <li className='hover:bg-slate-300 cursor-pointer rounded-xl'><Link to="home" smooth={true} offset={50} duration={500}>Home</Link></li>
                        <li className='hover:bg-slate-300 cursor-pointer rounded-xl'><Link to="about" smooth={true} offset={50} duration={500}>About</Link></li>
                        <li className='hover:bg-slate-300 cursor-pointer rounded-xl'><Link to="team" smooth={true} offset={50} duration={500}>Team</Link></li>
                        <li className='hover:bg-slate-300 cursor-pointer rounded-xl'><Link to="platforms" smooth={true} offset={50} duration={500}>Platforms</Link></li>
                        <li className='hover:bg-slate-300 cursor-pointer rounded-xl'><Link to="pricing" smooth={true} offset={50} duration={500}>Pricing</Link></li>
                   </ul>
                </div>
                <div className='hidden md:flex pr-4'>
                    <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
                    <button className='px-8 py-3'>Sign Up</button>
                </div>
                <div className='md:hidden mr-4' onClick={handleClick}>
                    {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
                    
                </div>
            </div>

            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8 md:hidden'}>
                <li className='border-b-2 border-zinc-300 w-full text-center'>Home</li>
                <li className='border-b-2 border-zinc-300 w-full text-center'>About</li>
                <li className='border-b-2 border-zinc-300 w-full text-center'>Support</li>
                <li className='border-b-2 border-zinc-300 w-full text-center'>Platforms</li>
                <li className='border-b-2 border-zinc-300 w-full text-center'>Pricing</li>
                <div className='flex flex-col my-4'>
                    <button className='bg-transparent text-indigo-600 px-8 py-3 my-4 '>Sign In</button>
                    <button className='px-8 py-3 my-4'>Sign Up</button>
                </div>
            </ul>
        </div>
    )
}

export default Navbar
