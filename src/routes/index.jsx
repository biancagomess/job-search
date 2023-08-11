import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Jobs from "../components/JobDiv/Jobs";
import Layout from "../components/Layout/Layout";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Companies from "../pages/Companies/Companies";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path="/jobs" element={<Jobs/>} />
                <Route path="/blog" element={<Blog/>} />
                <Route path="/companies" element={<Companies/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path='*' element={<div> Page not found! Please verify the correct url</div>} />
            </Route>
        </Routes>
    )

}