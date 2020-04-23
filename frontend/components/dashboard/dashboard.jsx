import React from "react";
import PostNavBar from "../posts_navbar/posts_navbar_container";
import NavBar from "../navbar/navbar_container";
import PostIndex from "../posts/post_index_container";
import Avatar from "../avatar/avatar";
import PostItem from "../posts/post_item_container";

class Dashboard extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllUsers();
        this.props.fetchAllPosts();
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
                    authorId = {user.id}
                    openModal = {() => this.props.openModal("User Show")}
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
    renderRadar(){
        let radarPosts =this.props.posts.filter((post) => post.likers.length >= 4 && post.author.id !== this.props.currentUser.id)
        let radar;
        if (radarPosts.length > 0){
            radar = radarPosts[0];
            return(
                <div className = "radar-post">
                    <h1 className = "radar-title">Radar</h1>
                    <PostItem
                        key = {radar.id}
                        post = {radar}
                        authoringUser = {radar.author}
                    />
                </div>
            )
        }
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
                    {this.renderRadar()}
                </section>
            </div>
        )
    }
}

export default Dashboard;