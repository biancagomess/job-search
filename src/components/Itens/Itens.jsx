import React from 'react'

import { BsGithub, BsLinkedin } from "react-icons/bs"

const Itens = () => {
    return (
        <>
            <div className='grid'>
                <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'> Company </span>
                <div className="grid gap-3">
                    <li className='text-white opacity-[.7] hover:opacity-[1]'> About Us</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'> Features</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'> News</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'> FAQ </li>
                </div>
            </div>

            <div className='grid'>
                <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'> Ressources </span>
                <div className="grid gap-3">
                    <li className='text-white opacity-[.7] hover:opacity-[1]'> Account </li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'> Support Center</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'> FeedBack</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'> Contact Us </li>
                </div>
            </div>

            <div className='grid'>
                <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'> Suppport </span>
                <div className="grid gap-3">
                    <li className='text-white opacity-[.7] hover:opacity-[1]'> Events </li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'> Promo</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'> Demo</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'> Careers </li>
                </div>
            </div>

            <div className='grid'>
                <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'> Contact Us </span>
                <div className="text-[14px] text-white">
                    <small>
                        jobsearch@gmail.com 
                    </small>
                    <div className='socialIcons flex gap-4 py-[1rem] '>
                        <BsLinkedin className='bg-white p-[5px] h-[35px] w-[35px] rounded-full text-greenColor icon'/>
                        <BsGithub className='bg-white p-[5px] h-[35px] w-[35px] rounded-full text-greenColor icon'/>
                    </div>
                </div>
            </div>
        </> 
    )
}

export default Itens