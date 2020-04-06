import React from "react";
import PostItem from "./post_item_container";

class PostIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllPosts();
    }

    render(){
        let posts = this.props.posts.map(post => {
            return(
                <PostItem
                    key = {post.id}
                    post = {post}
                    authoringUser = {this.props.users[post.user_id]}
                    deletePost = {this.props.deletePost}
                />
            )
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