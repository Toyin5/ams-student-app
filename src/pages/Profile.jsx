import React, { useState } from 'react'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/NavBar'

const Profile = () => {

    const name = localStorage.getItem("name")
    const id = localStorage.getItem("id")
    return (
        <>
            <Navbar />

            <Footer />
        </>
    )
}

export default Profile