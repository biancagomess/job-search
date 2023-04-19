import React from 'react'
import Jobs from './Components/JobDiv/Jobs'
import Layout from './Components/Layout/Layout'


import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <div className='w-[85%] m-auto bg-white'>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout>
          </Layout>}>
            <Route path="/jobs" element={<Jobs>
            </Jobs >} />
            <Route path='*' element={<div> Page not found! Please verify the correct link</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App