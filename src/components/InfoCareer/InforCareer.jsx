import React from 'react'
import { Link } from 'react-router-dom'

const InforCareer = () => {
    const goToRegister = () => {

    }
    return (
        <div className='card mt-[2rem] flex justify-between p-[5rem] rounded-[10px]'>
            <div>
                <h1 className="text-greenColor text-[30px] font-bold ">
                    Ready to switch your career ?
                </h1>
                <h2 className='text-textColor text-[25px] font-bold ' > Let's get started!</h2>
            </div>
            <Link to='/register' className='w-1/9 flex justify-center'>
                <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-greenColor hover:bg-greenColor duration-500 ease-in-out hover:border-white hover:text-white'>
                    Get Started
                </button>
            </Link>
        </div >
    )
}

export default InforCareer