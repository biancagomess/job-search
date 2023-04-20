import React from 'react'

const LayoutBackground = (props) => {
  return (
    <div className="container w-[50%] m-auto">
      <div className="container-login w-full flex flex-wrap items-center justify-center p-4 bg-slate-200 shadow-default rounded-lg">
        <div className="wrap-login w-120 bg-transparent rounded-xl overflow-hidden pt-16 pr-14 pb-8 pl-14  ">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default LayoutBackground