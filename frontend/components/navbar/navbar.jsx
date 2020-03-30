import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({currentUser, logout}) => {
    
    const leftNav =(
    <section className = "nav-left">
        <Link to = "/" className = "logo">b</Link>
        <i className = "fas fa-search"></i>
        <input className = "search-bar" placeholder = "Search bumblr"></input>
    </section>
    )

    const rightNav = (
    <ul className = "nav-right">
        <li>
        <Link to = "/dashboard" className = "home-button"><i className="fas fa-home"></i></Link></li>
        <li>
        <i className = "fas fa-user"></i>
        <ul className = "account-dropdown">
            <li>
                <div><span>Account</span><span className="logout-button" onClick={()=>logout()}>Logout</span></div>
            </li>
        </ul>
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