import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({currentUser, logout}) => {
    
    const leftNav =(
    <section className = "nav-left">
        <Link to = "/" className = "b">b</Link>
        <i className = "fas fa-search"></i>
        <input className = "search-bar" placeholder = "Search bumblr"></input>
    </section>
    )

    const rightNav = (
    <ul className = "nav-right">
        <li>
            <Link to = "/dashboard" className = "home-button"><i className="fas fa-home"></i></Link>
        </li>
        <ul className = "dropdown-menu">
            <i className = "fas fa-user"></i>
            <div className = "dropdown-content">
                    <li><span>Account</span><span className="logout-button" onClick={()=>logout()}>Logout</span></li>
                    <li>Likes</li>
                    <li>Following</li>
            </div>
        </ul>
        <li>
        <a href="/"><i className="fab fa-github"></i></a>
        </li>
        <li>
        <a href="/"><i className="fab fa-angellist"></i></a>
        </li>
        <li>
        <a href="/"><i className="fab fa-linkedin"></i></a>
        </li>
    </ul> 
    )
   if (currentUser){
       return (
           <div className = "navbar">
           {leftNav}
           {rightNav}
           </div>
       )
   } else {
       return (
           <div className = "navbar">
           {leftNav}
           </div>
       )
   }
}

export default NavBar;