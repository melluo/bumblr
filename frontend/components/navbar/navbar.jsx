import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props){
        super(props);
    }
    
    renderLeftNav(){
        return(
        <section className = "nav-left">
            <Link to = "/" className = "b">b</Link>
            <i className = "fas fa-search"></i>
            <input className = "search-bar" placeholder = "Search bumblr"></input>
        </section>
        )
    }

    renderAccountDropdown(){
         return(
            <div className = "dropdown-menu">
                <i className = "fas fa-user"></i>
                <ul className = "dropdown-content">
                    <li>
                        <span>Account</span>
                        <span 
                            className = "logout-button" 
                            onClick = { () => this.props.logout()}
                        >Logout
                        </span>
                    </li>
                    <li>Likes</li>
                    <li>Following</li>
                </ul> 
            </div>
        )
    }
    renderRightNav(){
        return(
        <ul className = "nav-right">
            <li>
                <Link to = "/dashboard" className = "home-button"><i className = "fas fa-home"></i></Link>
            </li>
                {this.renderAccountDropdown()}
            <li>
                <a href = "/"><i className = "fab fa-github"></i></a>
            </li>
            <li>
                <a href = "/"><i className = "fab fa-angellist"></i></a>
            </li>
            <li>
            <a href = "/"><i className = "fab fa-linkedin"></i></a>
            </li>
        </ul> 
        )
    }
    
    render(){
        if (this.props.currentUser){
            return (
                <div className = "navbar navbar-user">
                    {this.renderLeftNav()}
                    {this.renderRightNav()}
                </div>
            )
        } else {
            return (
                <div className = "navbar">
                    {this.renderLeftNav()}
                </div>
            )
        }
    }
}

export default NavBar;