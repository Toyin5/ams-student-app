import React, { useState } from 'react'
import { FaEdit, FaSave, FaUser } from 'react-icons/fa'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/NavBar'

const Profile = () => {

    const [name, setName] = useState(localStorage.getItem("name"));
    const [id, setId] = useState(localStorage.getItem("id"));

    function handleSubmit() {
        // e.preventDefault();
        localStorage.setItem("name", name);
        localStorage.setItem("id", id);
    }

    const contentStyle = {
        "paddingTop": "50px"
    }

    return (
        <>
            <Navbar />
            <div style={contentStyle} className='container content has-text-centered'>
                <h2>
                    <span className="icon-text">
                        <span className="icon">
                            {/* <i class="fas fa-home"></i> */}
                            <FaUser />
                        </span>
                        <span>Profile Page</span>
                    </span>
                </h2>
                <form className='box' onSubmit={handleSubmit} method='GET'>
                    <h4>
                        <span className="icon-text">
                            <span className="icon">
                                {/* <i class="fas fa-home"></i> */}
                                <FaEdit />
                            </span>
                            <span>Edit your profile</span>
                        </span>
                    </h4>
                    <div className='field'>
                        <label className='label'>Name</label>
                        <div className='control'>
                            <input className='input' type='name' placeholder={`Old Name: ${name}`} onChange={(e) => setName(e.target.value)} required />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>ID</label>
                        <div className='control'>
                            <input className='input' type='password' placeholder={`Old ID: ${id}`} onChange={(e) => setId(e.target.value)} required />
                        </div>
                    </div>
                    <button className='button is-primary'>
                        <span className="icon-text">
                            <span className="icon">
                                {/* <i class="fas fa-home"></i> */}
                                <FaSave />
                            </span>
                            <span>Save</span>
                        </span>
                    </button>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Profile