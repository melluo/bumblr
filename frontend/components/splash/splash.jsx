import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from "../navbar/navbar_container";
const Splash = () => {
    return(
        <>
        <NavBar />
        <div className = "splash-container">
            <div className = "logo">bumblr</div>
                <div className = "description"> See what all the buzz is about</div>
            <Link to = "/signup" className = "signup">Get Started</Link>
            <Link to = "/login" className = "login">Log In</Link>
        </div>
        </>
    )
}

export default Splash;