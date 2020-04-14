import React from "react";
import PostNavBar from "../posts_navbar/posts_navbar_container";
import NavBar from "../navbar/navbar_container";
import PostIndex from "../posts/post_index_container";
import Avatar from "../avatar/avatar";

class Dashboard extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllUsers();
        this.props.fetchAllPosts();
        // this.props.fetchUserLikes(this.props.currentUser.id);
    }
    
    renderRecommendedBlogs(){
        let unfollowedUsers = [];
        this.props.users.forEach((user) => {
           if (!user.followers.includes(this.props.currentUser.id) && user.id !== this.props.currentUser.id){
               unfollowedUsers.push(user);
           }
        })
        
        const usersList = unfollowedUsers.map((user) => {
            let avatarUrl;
            if(!user.avatarUrl){
                avatarUrl = window.defaultAvatar;
            } else{
                avatarUrl = user.avatarUrl;
            }
            return(
            <li className = "rec-users" key = {user.id}>
                <Avatar 
                    avatarUrl = {avatarUrl}
                />
                {user.username}
                <button className = "follow-button" onClick = { () => this.props.follow(user.id) }>Follow</button>
            </li>
            )
        });

        return(
            <ul className = "recommended-blogs">
                <h1 className = "rec-blogs-title">Recommended Blogs</h1>
                {usersList}
            </ul>
        )
    }
    render() {
        return(
            <div className = "dashboard-container">
                <NavBar />
                <section className = "empty-width"></section>
                <section className = "dashboard-left">
                    <section className = "post-navbar">
                        <PostNavBar />
                    </section>
                    <section className = "dashboard-post-index">
                        <PostIndex />
                    </section>
                </section>
                <section className = "dashboard-right">
                    {this.renderRecommendedBlogs()}
                </section>
            </div>
        )
    }
}

export default Dashboard;