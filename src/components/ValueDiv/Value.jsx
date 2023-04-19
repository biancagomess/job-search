import React from 'react'
import success from "../../assets/img/success.png"
import team from "../../assets/img/team.png"
import world from "../../assets/img/world.png"

import Inforcareer from '../InfoCareer/InforCareer'

const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block'>
        We are great in what we offer
      </h1>
      <div className="grid gap-[10rem] grid-cols-3 items-center">
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className='flex items-center gap-3'>
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#eeedf7] h-[40px] w-[40px] flex items-center justify-center">
              <img src={world} alt="present around the world" className='w-[100%] ' />
            </div>
            <span className='font-semibold text-textColor '>
              Commitment
            </span>
          </div>
          <p className='text-[14px] text-textColor opacity-[.7] py-[1rem] font-semibold '>
            We are present all over the world and we are committed to the environment
          </p>
        </div>
        <div className="singleGrid rounded-[10px] hover:bg-[#f7edf5] p-[1.5rem]">
          <div className='flex items-center gap-3'>
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#f7edf5] h-[40px] w-[40px] flex items-center justify-center">
              <img src={success} alt="present around the world" className='w-[100%] ' />
            </div>
            <span className='font-semibold text-textColor '>
              Qualified services
            </span>
          </div>
          <p className='text-[14px] text-textColor opacity-[.7] py-[1rem] font-semibold '>
            We have the best search engines in the employability sector to provide you with the best experience
          </p>
        </div>
        <div className="singleGrid rounded-[10px] hover:bg-[#fcfae3] p-[1.5rem]">
          <div className='flex items-center gap-3'>
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#fcfae3] h-[40px] w-[40px] flex items-center justify-center">
              <img src={team} alt="present around the world" className='w-[100%] ' />
            </div>
            <span className='font-semibold text-textColor '>
              Support Team
            </span>
          </div>
          <p className='text-[14px] text-textColor opacity-[.7] py-[1rem] font-semibold '>
            We have a highly qualified team ready to serve you
          </p>
        </div>
      </div>
      <Inforcareer />
    </div>
  )
}

export default Value