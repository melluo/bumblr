import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from "../navbar/navbar_container";
const Splash = () => {
    return(
        <>
        <NavBar />
        <div className = "splash-container">
            <div className = "header-container">
                <div className = "splash-logo">bumblr</div>
        <div className = "description"> See what all the buzz is about</div>
        </div>
        <Link to = "/signup" className = "signup-link">
            <button className = "signup">Get Started</button>
        </Link>
        <Link to = "/login" className = "login-link">
            <button className = "login">Log In</button>
        </Link>
        </div>
        </>
    )
}

export default Splash;