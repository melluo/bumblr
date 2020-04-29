import React from "react";
import Avatar from "../avatar/avatar";
import NavBar from "../navbar/navbar_container";
import { Link } from "react-router-dom";

class Following extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchAllUsers();
    }

    render(){
        let followingLength = 0;
        let usersLi = this.props.users.map((user) => {
            if (user.followers.includes(this.props.currentUser.id)){
                followingLength += 1;
                let avatarUrl;
                if(!user.avatarUrl){
                    avatarUrl = window.defaultAvatar;
                } else{
                    avatarUrl = user.avatarUrl;
                }
                return(
                    <li key = {user.id}>
                    <span>
                        <Avatar
                            authorId = {user.id}
                            openModal = {() => this.props.openModal("User Show")}
                            avatarUrl = {avatarUrl}
                        />
                    <span className = "following-user user-show-username" authorid = {user.id} onClick = {() => this.props.openModal("User Show")}>{user.username}</span></span>
                    <button className = "unfollow-but" onClick = {() => this.props.unfollow(user.id)}>Unfollow</button>
                    </li>
                )
            }
        });
        return(
            <div>
                <NavBar />
                <div className = "following-container">
                    <Link to = "/following" className = "following-length">Following {followingLength} Tumblrs</Link>
                        <ul className = "following-list">
                            {usersLi}
                        </ul>
                </div>
            </div>
        )
    }
}

export default Following;