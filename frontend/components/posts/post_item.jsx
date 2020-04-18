import React from "react";
import Avatar from "../avatar/avatar";

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
        let tagContainer;
        if (post.tags){
            tagContainer = <ul className = "tag-container">{tags}</ul>
        } else{
            tagContainer = <span></span>
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
                        {tagContainer}
                    </div>
                )
            case "photo":
                return(
                    <div>
                        <img className = "photo-item" src = {post.imageUrl}/>
                        {postBody}
                        {tagContainer}
                    </div>
                )
            case "quote":
                return(
                    <div>
                        <h3 className = "quote-content">&ldquo;{post.title}&rdquo;</h3>
                        <p className = "quote-source">{quoteSource}</p>
                        {tagContainer}
                    </div>
                )
            case "link":
                return(
                    <div>
                        <a href = {link} className = "link-container">
                            <h3 className = "link-title">{cropLinkTitle}</h3>
                            <p className = "link-body">{post.body}</p>
                        </a>
                        {tagContainer}
                    </div>
                )
        }
    }
    renderEdit(){
        const post = this.props.post;
        if(post.author.id === this.props.currentUser.id){
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
    }
    renderDelete(){
        if(this.props.post.author.id === this.props.currentUser.id){
            return(
                <li onClick = {() => this.props.deletePost(this.props.post.id)}>
                        <i className = "fas fa-trash-alt"></i>
                </li>
            )
        }
    }
    renderLike(){
        if(this.props.liked){
            return(
                <li onClick = {() => this.props.unlike(this.props.post.id)}>
                    <i className = "fas fa-heart"></i>
                </li>
            )
        } else {
            return(
                <li onClick = {() => this.props.like(this.props.post.id, this.props.currentUser.id)}>
                    <i className = "far fa-heart"></i>
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
    renderAvatar(){
        let avatarUrl;
        if (!this.props.author.avatarUrl){
            avatarUrl = window.defaultAvatar;
        } else{
            avatarUrl = this.props.author.avatarUrl;
        }
        return(
            <Avatar
                authorId = {this.props.author.id}
                openModal = {() => this.props.openModal("User Show")}
                avatarUrl = {avatarUrl}
            />
        )
    }
    renderNotes(){
        let likeLength = this.props.likers.length;
        let noteCount = likeLength;

        return(
            <span className = "note-count">{noteCount} {noteCount === 1 ? "note" : "notes"}</span>
        )
    }

    render(){
        return(
            <div className = "posts">
            {this.renderAvatar()}
            <div className = "post-container">
                <div className = "post-header">
                    {this.props.author.username}
                    {this.renderFollow()}
                </div>
                <div className = "post-content">
                    {this.renderPost()}
                </div>
                <div className = "post-footer">
                {this.renderNotes()}
                    <ul className = "post-options">
                        {this.renderLike()}
                        {this.renderDelete()}
                        {this.renderEdit()}
                    </ul>   
                </div>
            </div>
            </div>
        )
    }
}

export default PostItem;