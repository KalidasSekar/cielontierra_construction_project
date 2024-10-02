import React from "react";
import './Navbar.css';
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Navbar/images/logo.png';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

function Navbar() {

    return (
        // navbar - expand - md navbar - mainbg
        <nav className="navbar navbar-expand-md navbar">
            <NavLink className="navbar-brand navbar-logo" to="/" exact>
                <img className="logo" src={logo} alt="cielo'n'Tierra_logo" />
            </NavLink>
            <div className="enquires">
                <i className="enquiries_text"><PhoneIcon className="nav_icon" />+91 9940581515</i>
                <i className="enquiries_text"><EmailIcon className="nav_icon" />kalidassekar65@gmail.com</i>

            </div>

            <div
                className="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aira-label="Toggle navigation">
                <i className="fas fa-bars text-white"></i>
            </div>
            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/" exact><i className="nav-link-label">Home</i></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about" exact><i className="nav-link-label">About</i></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/services" exact><i className="nav-link-label">Services</i></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/projects" exact><i className="nav-link-label">Projects</i></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact" exact><i className="nav-link-label">Contact</i></NavLink>
                    </li>
                </ul>
            </div>
        </nav >
    );
}

export default Navbar;