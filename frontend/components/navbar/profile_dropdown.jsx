import React from "react";
import { Link } from "react-router-dom";

class ProfileDropdown extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        e.preventDefault();
        this.props.closeModal();
        this.props.logout();
    }
    render(){
        return(
            <ul className = "profile-dropdown">
                <span>Account
                <button  
                    className = "logout-button"
                    onClick = {this.handleClick}
                >Logout
                </button>
                </span>
                <li>
                    <Link to = "/likes" onClick={() => this.props.closeModal()}>
                    <i className = "fas fa-heart"></i>
                    <span>Likes</span>
                    </Link>
                </li>
                <li>
                    <Link to = "/following" onClick={() => this.props.closeModal()}>
                    <i className = "far fa-plus-square"></i>
                    <span>Following</span>
                    </Link>
                </li>
            </ul>
        )
    }
}

export default ProfileDropdown;