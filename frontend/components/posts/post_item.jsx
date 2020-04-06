import React from "react";


class PostItem extends React.Component{
    constructor(props) {
        super(props);
    }
    renderPost(){
        const post = this.props.post;

        let tags;
        let appendHash;
        if( post.tags ){
            if( post.tags.includes(" ") ){
                tags = post.tags.trim().split(" ").map((tag) => {
                    appendHash = "#".concat(tag);
                    return(<li key = {tag}>{appendHash}</li>)
                });
            } else{
                appendHash = "#".concat(tags);
                return(<li key = {post.tags}>{appendHash}</li>)
            };
        }

        switch(post.post_type){
            case "text":
                return(
                    <div className = "text-item">
                        <h3 className = "item-title">{post.title}</h3>
                        <p className="item-body">{post.body}</p>
                        <ul className = "tag-container">{tags}</ul>
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
                <ul className = "post-options">
                    <li onClick = {() => this.props.deletePost(this.props.post.id)}>
                        <i className = "fas fa-trash-alt"></i>
                    </li>
                    <li onClick = {() => this.props.openModal("Edit Text Post", this.props.post)}>
                        <i className = "fas fa-pencil-alt"></i>
                    </li>
                </ul>
                
            </div>

        )
    }
}

export default PostItem;