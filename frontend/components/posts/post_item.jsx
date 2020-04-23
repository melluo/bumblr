import React from "react";
import Avatar from "../avatar/avatar";

class PostItem extends React.Component{
    constructor(props) {
        super(props);
       
    }
    renderPost(){
        
        let post = (this.props.post.reblogged_post_id) ? (this.props.originalPost) ? (this.props.originalPost) : this.props.post : this.props.post
       
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
        if ( post.tags && !this.props.originalPost ){
            tagContainer = <ul className = "tag-container">{tags}</ul>
        } else{
            tagContainer = <span></span>
        }
        let postBody;
        if ( post.body ){
            postBody = <p className="item-body">{post.body}</p>
        }
        
        let originalPost = this.props.originalPost;
        if (!originalPost){
            originalPost = this.props.post;
        }
        let reblogPosts = [];
        while (originalPost && originalPost.reblogged_post_id) {
                if (originalPost.reblog_body){
                    reblogPosts.push([originalPost.author, originalPost.reblog_body])
                };
                originalPost = this.props.posts[originalPost.reblogged_post_id];
            } 
       
       
    
        let reblogList = reblogPosts.map((post) => {
            return(
                <div className = "reblog-list" key = {post[1]}>
                <div className = "reblog-header">
                <Avatar 
                avatarUrl = {post[0].avatarUrl}
                /> 
                <span>{post[0].username}</span>
                </div>
                <p className = "reblog-body">{post[1]}</p>
                </div>
                )
            })
            
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
        
        let reblogHeader; 
        if  (this.props.post.reblogged_post_id && (this.props.post.reblog_body || this.props.post.reblog_tags)){
            reblogHeader = <div className = "reblog-header">
                <Avatar 
                    avatarUrl = {this.props.post.author.avatarUrl}
                /> 
                <span>{this.props.post.author.username}</span>
             </div>
        }

        let reblogBody;
        if (this.props.post.reblog_body){
            reblogBody = <p className="reblog-body">{this.props.post.reblog_body}</p>
        } 
        
        let reblogTags;
        if( this.props.post.reblog_tags ){
            if( this.props.post.reblog_tags.includes(" ") ){
                reblogTags =  this.props.post.reblog_tags.trim().split(" ").map((tag,idx) => {
                    appendHash = "#".concat(tag);
                    return(<li key = {idx}>{appendHash}</li>)
                });
            } else{
                appendHash = "#".concat(this.props.post.reblog_tags);
                reblogTags = <li key = {this.props.post.reblog_tags}>{appendHash}</li>
            };
        } 

        let reblogTagContainer;
        if (this.props.post.reblog_tags){
            reblogTagContainer = <ul className = "tag-container">{reblogTags}</ul>
        }

        switch(post.post_type){
            case "text":
                if (this.props.post.reblogged_post_id){
                    if (!originalPost || typeof this.props.posts[this.props.post.reblogged_post_id] === "undefined"){
                        return(
                            <div className = "text-item">
                                <div className = "original-text-post">
                                    <h3 className = "item-title">Original post removed</h3>
                                </div>
                                {reblogHeader}
                                {reblogBody}
                                {reblogTagContainer}
                            </div>
                        )
                    } else {
                        return(
                            <div className = "text-item">
                            <div className = "original-text-post">
                                <div className = "reblog-header">
                                    <Avatar 
                                        avatarUrl = {originalPost.author.avatarUrl}
                                    /> 
                                    <span>{originalPost.author.username}</span>
                                </div>
                                <h3 className = "item-title">{post.title}</h3>
                                    {postBody}
                            </div>     
                                    {reblogList}
                                    {reblogHeader}
                                    {reblogBody}
                                    {reblogTagContainer}
                            </div>
                        )
                    }
                } else {
                    return(
                        <div className = "text-item">
                        <h3 className = "item-title">{post.title}</h3>
                            {postBody}
                            {tagContainer}
                        </div>
                    )
                }
            case "photo":
                if (this.props.post.reblogged_post_id){
                    if (!originalPost || typeof this.props.posts[this.props.post.reblogged_post_id] === "undefined"){
                        return(
                            <div className = "photo-item">
                                <div className = "original-photo-post">
                                    <h3 className = "item-title">Original post removed</h3>
                                </div>
                                {reblogHeader}
                                {reblogBody}
                                {reblogTagContainer}
                            </div>
                        )
                    } else {
                        return(
                            <div className = "photo-item">
                            <div className = "original-photo-post">
                                <div className = "reblog-header">
                                    <Avatar 
                                        avatarUrl = {originalPost.author.avatarUrl}
                                    /> 
                                    <span>{originalPost.author.username}</span>
                                </div>
                                <img className = "photo-item" src = {originalPost.imageUrl}/>
                                    {postBody}
                            </div>     
                                    {reblogList}
                                    {reblogHeader}
                                    {reblogBody}
                                    {reblogTagContainer}
                            </div>
                        )
                    }
                } else {
                    return(
                        <div>
                            <img className = "photo-item" src = {post.imageUrl}/>
                            {postBody}
                            {tagContainer}
                        </div>
                    )
                }
            case "quote":
                if (this.props.post.reblogged_post_id){
                    if (!originalPost || typeof this.props.posts[this.props.post.reblogged_post_id] === "undefined"){
                        debugger;
                        return(
                            <div className = "text-item">
                                <div className = "original-quote-post">
                                    <h3 className = "item-title">Original post removed</h3>
                                </div>
                                {reblogHeader}
                                {reblogBody}
                                {reblogTagContainer}
                            </div>
                        )
                    } else {
                        return(
                            <div className = "text-item">
                            <div className = "original-quote-post">
                                <div className = "reblog-header">
                                    <Avatar 
                                        avatarUrl = {originalPost.author.avatarUrl}
                                    /> 
                                    <span>{originalPost.author.username}</span>
                                </div>
                                <h3 className = "quote-content">&ldquo;{post.title}&rdquo;</h3>
                            <p className = "quote-source">{quoteSource}</p>
                            </div>     
                                    {reblogList}
                                    {reblogHeader}
                                    {reblogBody}
                                    {reblogTagContainer}
                            </div>
                        )
                    }
                } else {
                    return(
                        <div>
                            <h3 className = "quote-content">&ldquo;{post.title}&rdquo;</h3>
                            <p className = "quote-source">{quoteSource}</p>
                            {tagContainer}
                        </div>
                    )
                }
              
            case "link":
                if (this.props.post.reblogged_post_id){
                    if (!originalPost || typeof this.props.posts[this.props.post.reblogged_post_id] === "undefined"){
                        return(
                            <div className = "text-item">
                                <div className = "original-link-post">
                                    <h3 className = "item-title">Original post removed</h3>
                                </div>
                                {reblogHeader}
                                {reblogBody}
                                {reblogTagContainer}
                            </div>
                        )
                    } else {
                        return(
                            <div className = "text-item">
                            <div className = "original-link-post">
                                <div className = "reblog-header">
                                    <Avatar 
                                        avatarUrl = {originalPost.author.avatarUrl}
                                    /> 
                                    <span>{originalPost.author.username}</span>
                                </div>
                                <a href = {link} className = "link-container">
                                    <h3 className = "link-title">{cropLinkTitle}</h3>
                                    <p className = "link-body">{post.body}</p>
                                </a>
                            </div>     
                                    {reblogList}
                                    {reblogHeader}
                                    {reblogBody}
                                    {reblogTagContainer}
                            </div>
                        )
                    }
                } else {
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
    }

    renderEdit(){
        let post = this.props.post;
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
        if(this.props.post.author.id !== this.props.currentUser.id){
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

    }
    renderReblog(){
        if(this.props.author.username !== this.props.currentUser.username && this.props.post) {
            return(
                <li onClick={() => this.props.openModal("Reblog Post", this.props.post)}>
                    <i className="fas fa-retweet"></i>
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
        let reblogLength = this.props.reblogs.length;
        
        let noteCount = likeLength + reblogLength;
          
        if(noteCount > 0){
            return(
                <span className = "note-count">{noteCount} {noteCount === 1 ? "note" : "notes"}
                    <ul className = "notes-dropdown">
                        <li>{likeLength} {likeLength === 1 ? "like" : "likes"}</li> 
                        <li>{reblogLength} {reblogLength === 1 ? "reblog" : "reblogs"}</li> 
                    </ul>
                </span>
            )
        } else{
            return(
                <span className = "note-count"></span>
            )
        }
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
                        {this.renderReblog()}
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