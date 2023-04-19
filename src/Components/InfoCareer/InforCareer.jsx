import React from 'react'

const InforCareer = () => {
    return (
        <div className='card mt-[2rem] flex justify-between p-[5rem] rounded-[10px]'>
            <div>
                <h1 className="text-greenColor text-[30px] font-bold ">
                    Ready to switch a career
                </h1>
                <h2 className='text-textColor text-[25px] font-bold ' > Let's get started!'</h2>
            </div>
            <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-greenColor hover:bg-white border-greenColor'>
                Get Started
            </button>
        </div>
    )
}

export default InforCareer