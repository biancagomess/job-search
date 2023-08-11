import React from 'react'

import Itens from '../Itens/Itens'

const Footer = () => {
  return (
    <footer className='footer p-[5rem] mb-4 bg-greenColor rounded-[10px] gap-8 grid grid-cols-5 m-auto items-center justify-center text-white'>
      <div>
        <div className="logoDiv">
          <h1 className='logo text-[25px] pb-[1.5rem] text-white'>
            <strong>Job</strong>
            Search
          </h1>
        </div>
        <p className='pb-[13px] opacity-70 leading-7 text-zinc-900'>
          Here you can search the best companies, employers and candidates.                  
        </p>
      </div>
      <Itens />
    </footer>
  )
}

export default Footer