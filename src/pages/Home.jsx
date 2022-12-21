import React, { useState, useEffect } from 'react'
// import "./Home.css"
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { FaBackward } from 'react-icons/fa';
import Scanner from '../components/Scanner';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../layouts/NavBar';
import Footer from '../layouts/Footer';




function Home() {
    const user = localStorage.getItem("name");
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate()

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const contentStyle = {
        "paddingTop": "50px"
    }

    useEffect(() => {
        if (!user) {
            navigate("/")
        }
    }, [user, navigate])


    return (
        <>
            <Navbar />
            <div style={contentStyle} className='content has-text-centered'>
                <h1>Welcome, {user}</h1>
                <p>
                    Welcome to the Attendance Management System(AMS) student App
                    <br />Click the button below to register an attendance
                </p>
                <button onClick={handleOpen} className='button is-large is-focus is-primary is-inverted '>Scan Code</button>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <Box sx={style}>
                            <IconButton style={{}} >
                                <FaBackward onClick={handleClose} />
                            </IconButton>
                            <Scanner />
                        </Box>
                    </Fade>
                </Modal>
            </div>
            <Footer />
        </>
    )
}

export default Home