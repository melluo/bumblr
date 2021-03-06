import React from "react";
import PostItem from "./post_item_container";

class PostIndex extends React.Component {
    constructor(props){
        super(props);
    }
   
    render(){
        let posts = this.props.posts.map(post => {
            if(post.author_id === this.props.currentUser.id || this.props.currentUser.following.includes(post.author_id)){
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
        let sortedPosts = posts.reverse();
        return(
            <ul className = "post-index">
            {sortedPosts}
            </ul>
        );
    }
}

export default PostIndex;