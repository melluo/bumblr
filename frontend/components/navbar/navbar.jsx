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
    
    renderRightNav(){
        return(
        <ul className = "nav-right">
            <li>
                <Link to = "/dashboard" className = "home-button"><i className = "fas fa-home"></i></Link>
            </li>
            <i className = "fas fa-user" onClick={() => this.props.openModal("Profile Dropdown")}></i>
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