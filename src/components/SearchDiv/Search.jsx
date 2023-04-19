import React from 'react'

import { CgCloseO, CgSearchFound } from 'react-icons/cg'
import { MdAddHomeWork, MdAddLocationAlt } from 'react-icons/md'

const Search = () => {
  return (
    <div className='searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]'>
      <form action="">
        <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[30px] bg-white p-5 shadown-greyIsh-700">
          <div className="flex gap-2 items-center border-2 p-2">
            <CgSearchFound className='text-[25px] text-greenColor icon' />
            <input type="text" className='bg-transparent text-greenColor w-[100%]' placeholder="Search job here ..." />
            <CgCloseO className='text-[30px] text-[#a5a6a6a] hover:text-redColor icon' />
          </div>
          <div className="flex gap-2 items-center border-2 p-2">
            <MdAddHomeWork className='text-[25px] text-greenColor icon' />
            <input type="text" className='bg-transparent text-greenColor w-[100%]' placeholder="Search by company ..." />
            <CgCloseO className='text-[30px] text-[#a5a6a6a] hover:text-redColor icon' />
          </div>
          <div className="flex gap-2 items-center border-2 p-2">
            <MdAddLocationAlt className='text-[25px] text-greenColor icon' />
            <input type="text" className='bg-transparent text-greenColor w-[100%] hover:' placeholder="Search by location ..." />
            <CgCloseO className='text-[30px] text-[#a5a6a6a] hover:text-redColor icon' />
          </div>

          <button className='bg-greenColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:opacity-70'> Search</button>
        </div>
      </form>
      <div className="second-div flex items-center gap-10 justify-center">
        {/* filter search by relevance, type and leval */}
        <div className="selectSearch flex items-center gap-2">
          <label htmlFor="relevance" className='text-[#808080] font-semibold'> Sort by:</label>
          <select name="" id="relevance" className='bg-greenColor text-white rounded-[5px] px-4 py-1'>
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts With</option>
            <option value="">Contains</option>
          </select>
        </div>

        <div className="selecSearch flex items-center gap-2">
          <label htmlFor="type" className='text-[#808080] font-semibold'> Type:</label>
          <select name="" id="type" className='bg-greenColor text-white rounded-[5px] px-4 py-1'>
            <option value="">Full-time</option>
            <option value="">Remote</option>
            <option value="">Contract</option>
            <option value="">Part-time</option>
          </select>
        </div>

        <div className="selecSearch flex items-center gap-2">
          <label htmlFor="level" className='text-[#808080] font-semibold'> Level:</label>
          <select name="" id="level" className='bg-greenColor text-white rounded-[5px] px-4 py-1'>
            <option value="">Senior</option>
            <option value="">Beginner</option>
            <option value="">Intermediate</option>
            <option value="">Advocate</option>
          </select>
        </div>

        <span className='text-[#a1a1a1] cursor-pointer'> Clear All</span>

      </div>
    </div>
  )
}

export default Search