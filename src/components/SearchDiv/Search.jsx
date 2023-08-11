import React, { useState } from 'react'


import { CgCloseO, CgSearchFound } from 'react-icons/cg'
import { MdAddHomeWork, MdAddLocationAlt } from 'react-icons/md'

const Search = () => {
  const [job, setJob] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [valueSelect, setValueSelect] = useState('default')

  const handleSubmit = (e) => {
    (e).preventDefault();
    setJob('');
    setCompany('');
    setLocation('');
  }

  const handleJob = (event) => {
    setJob(event.target.value);
  }
  const handleClearJob = (event) => {
    (event).preventDefault();
    setJob('');
  }
  const handleCompany = (event) => {
    setCompany(event.target.value);
  }
  const handleClearCompany = (event) => {
    (event).preventDefault();
    setCompany('');
  }

  const handleLocation = (event) => {
    setLocation(event.target.value);
  }
  const handleClearLocation = (event) => {
    (event).preventDefault();
    setLocation('');
  }

  const handleSortBy = (e) => {
    setValueSelect(e.target.value)
  }

  const handleClearAll = (e) => {
    setValueSelect(valueSelect)
    
  }

  return (
    <div className='searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]'>
      <form onSubmit={handleSubmit}>
        <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[30px] bg-white p-5 shadown-greyIsh-700">

          <div className="flex gap-2 items-center border-2 p-2 max-w-max">
            <CgSearchFound className='text-[25px] text-greenColor icon' />
            <input type="text" name="job" value={job} onChange={handleJob} className='bg-transparent text-greenColor w-[100%]' placeholder="Search job here ..." maxLength={15} />
            {job.length > 0 &&
              <CgCloseO className='text-[20px] text-[#a5a6a6a] hover:text-redColor icon' onClick={handleClearJob} />
            }
          </div>

          <div className="flex gap-2 items-center border-2 p-2">
            <MdAddHomeWork className='text-[25px] text-greenColor icon' />
            <input type="text" name='company' value={company} onChange={handleCompany} className='bg-transparent text-greenColor w-[100%]' placeholder="Search by company ..." />
            {company.length > 0 &&
              <CgCloseO className='text-[20px] text-[#a5a6a6a] hover:text-redColor icon' onClick={handleClearCompany} />
            }
          </div>

          <div className="flex gap-2 items-center border-2 p-2">
            <MdAddLocationAlt className='text-[25px] text-greenColor icon' />
            <input type="text" name='location' value={location} onChange={handleLocation} className='bg-transparent text-greenColor w-[100%] hover:' placeholder="Search by location ..." maxLength={5} />
            {location.length > 0 &&
              <CgCloseO className='text-[20px] text-[#a5a6a6a] hover:text-redColor icon' onClick={handleClearLocation} />
            }
          </div>

          <button className='bg-greenColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:opacity-70'> Search</button>
        </div>
      </form>
      <div className="second-div flex items-center gap-10 justify-center">
        {/* filter search by relevance, type and leval */}
        <div className="selectSearch flex items-center gap-2">
          <label htmlFor="relevance" className='text-[#808080] font-semibold'> Sort by:</label>
          <select defaultValue={valueSelect} name="" id="relevance" className='bg-greenColor text-white rounded-[5px] px-4 py-1' placeholder='select'>
            <option value="default" disabled hidden> Choose one..</option>
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts With</option>
            <option value="">Contains</option>
          </select>
        </div>

        <div className="selecSearch flex items-center gap-2">
          <label htmlFor="type" className='text-[#808080] font-semibold'> Type:</label>
          <select defaultValue={valueSelect} name="" id="type" className='bg-greenColor text-white rounded-[5px] px-4 py-1'>
            <option value="value">Choose one</option>
            <option value="">Full-time</option>
            <option value="">Remote</option>
            <option value="">Contract</option>
            <option value="">Part-time</option>
          </select>
        </div>

        <div className="selecSearch flex items-center gap-2">
          <label htmlFor="level" className='text-[#808080] font-semibold'> Level:</label>
          <select defaultValue={valueSelect} name="" id="level" className='bg-greenColor text-white rounded-[5px] px-4 py-1'>
            <option value="value">Choose one</option>
            <option value="">Senior</option>
            <option value="">Beginner</option>
            <option value="">Intermediate</option>
            <option value="">Advocate</option>
          </select>
        </div>

        <span className='text-[#a1a1a1] cursor-pointer' onClick={handleClearAll}> Clear All</span>

      </div>
    </div>
  )
}

export default Search