import React from "react";


class PostItem extends React.Component{
    constructor(props) {
        super(props);
    }
    renderPost(){
        const post = this.props.post
        switch(post.post_type){
            case "text":
                return(
                    <div className = "text-post">
                        <h2>{post.title}</h2>
                        <textarea>{post.body}</textarea>
                    </div>
                )
        }
    }
    render(){
        return(
            <div className = "post-container">
                <div className = "post-header">
                    {this.props.author.username}
                </div>
                <div className = "post-content">
                    {this.renderPost()}
                </div>
                <div className = "post-options">
                    <ul>
                    <li onClick = {() => this.props.deletePost(this.props.post.id)}>
                        <i class="fas fa-pencil-alt"></i>
                    </li>
                    <li onClick = {() => this.props.openModal("Edit Text Post", this.props.post)}>
                        <i className = "fas fa-edit"></i>
                    </li>
                    </ul>
                </div>
            </div>

        )
    }
}

export default PostItem;