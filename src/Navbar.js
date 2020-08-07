import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="Navbar">
            <navbar>
                <ul className= "Navbar-ul">
                    <div><li className="Navbar-il"><Link to="/" className= "Navbar-a">Home</Link></li></div>
                    <div><li className="Navbar-il"><Link to="/News" className= "Navbar-a">News</Link></li></div>
                    <div><li className="Navbar-il"><Link to="/Contact" className= "Navbar-a">Contact</Link></li></div>
                    <div><li className="Navbar-il"><Link to="/About" className= "Navbar-a">About</Link></li></div>
                </ul>
            </navbar>
        </div>
    )
}

export default Navbar;