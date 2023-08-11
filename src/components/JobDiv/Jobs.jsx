import React from 'react'

import { CgTime } from 'react-icons/cg'
import ford from '../../assets/logos/logo-ford.png'
import google from '../../assets/logos/logo-google.png'
import microsoft from '../../assets/logos/logo-microsoft.png'
import next from '../../assets/logos/logo-next.png'
import nike from '../../assets/logos/logo-nike.png'
import yahoo from '../../assets/logos/logo-yahoo.png'
import Search from '../SearchDiv/Search'


const Data = [
  {
    id: 1,
    image: ford,
    title: "Web Developer",
    time: "Now",
    location: "Canada",
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    company: 'Ford'
  },
  {
    id: 2,
    image: microsoft,
    title: "QA",
    time: "5 hours",
    location: "NY",
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    company: 'microsoft'
  },
  {
    id: 3,
    image: nike,
    title: "Python Dev. ",
    time: "20 days",
    location: "Mexico",
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    company: 'Nike'
  },
  {
    id: 4,
    image: next,
    title: "UI Desing",
    time: "2 hours",
    location: "Canada",
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    company: 'Next'
  },
  {
    id: 5,
    image: yahoo,
    title: "Product Owner",
    time: "Now",
    location: "U.S.A",
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    company: 'Yahoo'
  },
  {
    id: 6,
    image: google,
    title: "Cyber Security",
    time: "Now",
    location: "U.S.A",
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    company: 'Google'
  },
  {
    id: 7,
    image: ford,
    title: "Web Developer",
    time: "Now",
    location: "Canada",
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    company: 'Ford'
  },
  {
    id: 8,
    image: nike,
    title: "Data Analytics",
    time: "Now",
    location: "China",
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    company: 'Nike'
  },
  {
    id: 9,
    image: yahoo,
    title: "CTO",
    time: "10 days",
    location: "U.S.A",
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    company: 'Yahoo'
  },
  {
    id: 10,
    image: google,
    title: "Web Developer",
    time: "Now",
    location: "Canada",
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    company: 'Google'
  },
  {
    id: 11,
    image: google,
    title: "Web Developer",
    time: "Now",
    location: "Canada",
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    company: 'Google'
  },
  {
    id: 12,
    image: yahoo,
    title: "CTO",
    time: "10 days",
    location: "U.S.A",
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    company: 'Yahoo'
  },
]

const Jobs = () => {

  return (
    <div>
      <Search />
      <div className="jobContainer flex gap-6 justify-center flex-wrap items-center py-10">
        {Data.map(({ id, image, title, time, location, desc, company }) => {
          return (
            <div key={id} className="group group/item singlesJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-greenColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
              <span className='flex justify-between items-center gap-4'>
                <h1 className='text-[16px] font-semibold text-greenColor group-hover:text-white'>
                  {title}
                </h1>
                <span className='flex items-denter text-[#ccc] gap-1'>
                  <CgTime />{time}
                </span>
              </span>
              <h6 className="text-[#ccc]">{location}</h6>

              <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>{desc}</p>

              <div className="company flex items-center gap-2">
                <img src={image} alt="Company Logo" className='w-[20%]' />
                <span className='text-[14px] py-[1rem] block group-hover:text-white'> {company}</span>
              </div>
              <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-greenColor hover:bg-white  group-hover/item:text-textColor'>Apply Now</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Jobs