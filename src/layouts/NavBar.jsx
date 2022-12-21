import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    function handleClick(e) {
        e.preventDefault();
        setOpen(!isOpen);
    }
    const user = localStorage.getItem("name");
    return (
        <nav
            className="navbar is-primary"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="container">
                <div className="navbar-brand">
                    <div className="navbar-item">
                        <span className="icon-text">
                            <span className="icon is-white">
                                <Link to="/home"><FaHome /></Link>
                            </span>
                            <Link to="/home"><span>{user}</span></Link>
                        </span>

                    </div>
                    <a
                        role="button"
                        href="/"
                        className={`navbar-burger burger ${isOpen && "is-active"}`}
                        aria-label="menu"
                        aria-expanded="false"
                        onClick={handleClick}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div className={`navbar-menu ${isOpen && "is-active"}`}>
                    <div className="navbar-start">
                        <NavLink className="navbar-item" activeclassname="is-active" to="/home">
                            Home
                        </NavLink>

                        <NavLink
                            className="navbar-item"
                            activeclassname="is-active"
                            to="/profile"
                        >
                            Profile
                        </NavLink>

                        <NavLink
                            className="navbar-item"
                            activeclassname="is-active"
                            to="/about"
                        >
                            About
                        </NavLink>
                    </div>

                    {/* <div className="navbar-end">
                        <div className="navbar-item">
                            <span className="icon-text">
                                <span className="icon">
                                    <Link to="/" ><FaHome /></Link>
                                </span>
                                <Link to="/" ><span>{user}</span></Link>
                            </span>
                        </div>
                    </div> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;