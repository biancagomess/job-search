import React from 'react'
import Jobs from './components/JobDiv/Jobs'
import Layout from './components/Layout/Layout'
import About from './pages/About/About'
import Blog from './pages/Blog/Blog'
import Companies from './pages/Companies/Companies'
import Contact from './pages/Contact/Contact'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/auth'
import { AppRouter } from "./routes"



const App = () => {
  return (
    <div className='w-[85%] m-auto bg-white'>
      <BrowserRouter>
        <AuthProvider>
          <AppRouter/>
          {/* <Routes>
            <Route path='/' element={<Layout></Layout>}>
              <Route path="/jobs" element={<Jobs></Jobs >} />
              <Route path="/blog" element={<Blog></Blog >} />
              <Route path="/companies" element={<Companies></Companies >} />
              <Route path="/login" element={<Login></Login >} />
              <Route path="/about" element={<About></About >} />
              <Route path="/register" element={<Register></Register>} />
              <Route path="/contact" element={<Contact></Contact>} />
              <Route path='*' element={<div> Page not found! Please verify the correct url</div>} />
            </Route>
          </Routes> */}
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App