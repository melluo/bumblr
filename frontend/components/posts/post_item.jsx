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
                tags = post.tags.trim().split(" ").map((tag,idx) => {
                    appendHash = "#".concat(tag);
                    return(<li key = {idx}>{appendHash}</li>)
                });
            } else{
                appendHash = "#".concat(post.tags);
                tags = <li key = {post.tags}>{appendHash}</li>
            };
        }

        let postBody;
        if ( post.body ){
            postBody = <p className="item-body">{post.body}</p>
        }

        let quoteSource;
        if( post.post_type === "quote" && post.body ){
            quoteSource = "— ".concat(post.body);
        }

        let link;
        if(post.title){
            if( post.title.includes("https://") ){
                link = post.title;
            } else{
                link = "https://".concat(post.title);
            }
        }

        let cropLinkTitle;
        if ( post.title ){
            if ( post.title.includes(".") ){
                let dotIndex = post.title.indexOf(".");
                cropLinkTitle = post.title.slice(0, dotIndex);
            } else{
                cropLinkTitle = post.title;
            }
        }

        switch(post.post_type){
            case "text":
                return(
                    <div className = "text-item">
                        <h3 className = "item-title">{post.title}</h3>
                        {postBody}
                        <ul className = "tag-container">{tags}</ul>
                    </div>
                )
            case "photo":
                return(
                    <div>
                        <img className = "photo-item" src = {post.imageUrl}/>
                        {postBody}
                        <ul className = "tag-container">{tags}</ul>
                    </div>
                )
            case "quote":
                return(
                    <div>
                        <h3 className = "quote-content">&ldquo;{post.title}&rdquo;</h3>
                        <p className = "quote-source">{quoteSource}</p>
                        <ul className = "tag-container">{tags}</ul>
                    </div>
                )
            case "link":
                return(
                    <div>
                        <a href = {link} className = "link-container">
                            <h3 className = "link-title">{cropLinkTitle}</h3>
                            <p className = "link-body">{post.body}</p>
                        </a>
                        <ul className = "tag-container">{tags}</ul>
                    </div>
                )
        }
    }
    renderEdit(){
        const post = this.props.post;

        switch(post.post_type){
            case "text":
                return(
                <li onClick = {() => this.props.openModal("Edit Text Post", this.props.post)}>
                    <i className = "fas fa-pencil-alt"></i>
                </li>
                )
            case "photo":
                return(
                <li onClick = {() => this.props.openModal("Edit Photo Post", this.props.post)}>
                    <i className = "fas fa-pencil-alt"></i>
                </li>
                )
            case "quote":
                return(
                <li onClick = {() => this.props.openModal("Edit Quote Post", this.props.post)}>
                    <i className = "fas fa-pencil-alt"></i>
                </li>    
                )
            case "link":
                return(
                <li onClick = {() => this.props.openModal("Edit Link Post", this.props.post)}>
                    <i className = "fas fa-pencil-alt"></i>
                </li>    
                )
        }
    }
    renderFollow(){
        if(this.props.author.username !== this.props.currentUser.username && !this.props.following){
            return( 
                <button className = "follow-button" onClick = { () => this.props.follow(this.props.author.id) }>Follow</button>
            )
        } else if (this.props.author.username !== this.props.currentUser.username && this.props.following) {
            return(
                <button className = "unfollow-button" onClick = { () => this.props.unfollow(this.props.author.id) }>Unfollow</button>
            )
        } 
    }
    render(){
        return(
            <div className = "post-container">
                <div className = "post-header">
                    {this.props.author.username}
                    {this.renderFollow()}
                </div>
                <div className = "post-content">
                    {this.renderPost()}
                </div>
                <ul className = "post-options">
                    <li onClick = {() => this.props.deletePost(this.props.post.id)}>
                        <i className = "fas fa-trash-alt"></i>
                    </li>
                    {this.renderEdit()}
                </ul>   
            </div>
        )
    }
}

export default PostItem;