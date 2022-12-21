import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'

function Router() {
    const user = localStorage.getItem("name");
    const ToRender = () => (user) ? <Home /> : <Login />
    return (
        <Routes>
            <Route path="/" element={<ToRender />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
        </Routes>

    )
}

export default Router