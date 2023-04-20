import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LayoutBackground from '../../components/Layout-Background/LayoutBackground'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <LayoutBackground>
      <form className="login-form w-full">
        <span className='login-form-title block text-3xl text-greenColor leading-5 text-center p-7'>
          Welcome!
        </span>

        <div className="wrap-input w-full relative border-b-2 border-solid border-[#adadad] mb-9 ">
          <input
            className={email != "" ? ' input inputValue text-2xl  leading-5 border-none block w-full h-11 bg-transparent py-0 px-2 text-inputColor focus:outline-none' : 'input text-2xl leading-5 border-none block w-full h-11 bg-transparent py-0 px-2 text-inputColor focus:outline-none'}
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <span className='focus-input absolute block w-full h-full top-0 left-0 pointer-events-none text-inputColor' data-placeholder="Email"></span>
        </div>

        <div className="wrap-input w-full relative border-b-2 border-solid border-[#adadad] mb-9 ">
          <input
            className={password != "" ? 'input inputValue text-2xl  leading-5 border-none block w-full h-11 bg-transparent py-0 px-2 text-inputColor focus:outline-none' : 'input text-2xl leading-5 border-none block w-full h-11 bg-transparent py-0 px-2 text-inputColor focus:outline-none'}
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <span className='focus-input absolute block w-full h-full top-0 left-0 pointer-events-none text-inputColor' data-placeholder="Passwrord"></span>
        </div>

        <div className="container-login-form-btn flex flex-wrap justify-center pb-3">
          <button className='login-form-bt text-base border-none rounded-lg text-white leading-5 uppercase flex justify-center items-center w-full h-12 hover:cursor-pointer'>
            Login
          </button>
        </div>

        <div className="create-account flex justify-center items-center mt-12 ">
          <span className='create-account-content text-sm text-[#575acd] font-bold '>
            Don't have an account ?
            <Link className='create text-greenColor' to="/register">Create now</Link>
          </span>
        </div>
      </form>
    </LayoutBackground>
  )
}

export default Login