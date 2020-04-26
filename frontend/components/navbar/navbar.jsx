import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from "./search/searchbar_container";

class NavBar extends React.Component {
    constructor(props){
        super(props);
    }
    
    renderLogo(){
        return(
        <section className = "nav-logo">
            <Link to = "/" className = "b">b</Link>
        </section>
        )
    }
    
    renderSearch(){
        if(this.props.currentUser){
            return(
                <section className = "nav-search">
                    <SearchBar />
                </section>
            )
        } else{
            return(
                <section className = "nav-search">
                    <i className = "fas fa-search"></i>
                    <input 
                        className = "search-bar" 
                        placeholder = "Search bumblr">
                    </input>
                </section>
            )
        }
    }
    
    renderRightNav(){
        return(
        <ul className = "nav-right">
            <li>
                <Link to = "/dashboard" className = "home-button"><i className = "fas fa-home"></i></Link>
            </li>
            <i className = "fas fa-user" onClick={() => this.props.openModal("Profile Dropdown")}></i>
            <li>
                <a href = "https://github.com/melluo" target="_blank" ><i className = "fab fa-github"></i></a>
            </li>
            <li>
                <a href = "https://angel.co/u/melluo" target="_blank" ><i className = "fab fa-angellist"></i></a>
            </li>
            <li>
            <a href = "https://www.linkedin.com/in/melodyluo/" target="_blank" ><i className = "fab fa-linkedin"></i></a>
            </li>
        </ul> 
        )
    }
    
    render(){
        if (this.props.currentUser){
            return (
                <div className = "navbar navbar-user">
                    {this.renderLogo()}
                    {this.renderSearch()}
                    {this.renderRightNav()}
                </div>
            )
        } else {
            return (
                <div className = "navbar">
                    {this.renderLogo()}
                    {this.renderSearch()}
                </div>
            )
        }
    }
}

export default NavBar;