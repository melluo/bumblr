import React from "react";

class PostIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchPosts();
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