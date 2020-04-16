import React from "react";
import Avatar from "../avatar/avatar";
import PostItem from "../posts/post_item_container";

class UserShow extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.fetchAllPosts();
        this.props.fetchAllUsers();
    }
    renderAvatar(){
        let avatarUrl;
        if (!this.props.user.avatarUrl){
            avatarUrl = window.defaultAvatar;
        } else{
            avatarUrl = this.props.user.avatarUrl;
        }
        return(
            <Avatar
                avatarUrl = {avatarUrl}
            />
        )
    }
    renderPosts(){
        let posts = this.props.posts.map((post) => {
            if(post.author.id === this.props.authorId){
                return(
                    <PostItem
                    key = {post.id}
                    post = {post}
                    users = {this.props.users}
                    authoringUser = {post.author}
                    deletePost = {this.props.deletePost}
                />
                )
            }
        })
        let sortPosts = posts.reverse();
        if (posts.every((post) => typeof post === "undefined")){
            return(
                <div className = "show-posts">
                    <div className = "no-show-posts">No posts to display.</div>
                </div>
            )
        } else{
            return(
                <div className = "show-posts">
                {sortPosts}
                </div>
            )
        }
    }
    render(){
        return(
            <div className = "user-show-container">
                <div className = "avatar-and-username">
                    {this.renderAvatar()}
                    <div className = "show-username">{this.props.user.username}</div>
                </div>
                {this.renderPosts()}
            </div>
        )
    }
}

export default UserShow;