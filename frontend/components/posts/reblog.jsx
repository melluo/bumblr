import React from 'react';
import Avatar from "../avatar/avatar";

class Reblog extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.rebloggedPost;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type){ 
        return (e) => {
            this.setState({
                [type]: e.target.value 
            });
        };
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.processPost(this.state)
            .then(() => this.props.closeModal());
    }
    renderPostContent(){

        let originalPost;
        if (this.props.rebloggedPost.reblogged_post_id) {
            originalPost = this.props.posts[this.props.rebloggedPost.reblogged_post_id];
        }
            while (true) {
                originalPost = this.props.posts[originalPost.reblogged_post_id];
                if (!originalPost.reblogged_post_id){
                    break;
                }
            }    
        

        let postBody = (this.state.body) ? <div className = "reblog-body"><p></p>{this.state.body}</div> : <span></span>
        if (originalPost.imageUrl){
            return (
                <>
                <img className = "image-preview" src = {originalPost.imageUrl} /> 
                    <div className = "reblog-container">    
                    <div className = "reblog-header">
                            <Avatar 
                                avatarUrl = {originalPost.author.avatarUrl}
                            /> 
                           <span>{originalPost.author.username}</span>
                    </div>
                    {postBody}
                    </div>
                </>
            )
        } else{
            return (
            <div className = "reblog-container">
                <div className = "reblog-header">
                    <Avatar 
                        avatarUrl = {originalPost.author.avatarUrl}
                    /> 
                    <span>{originalPost.author.username}</span>
                </div>
                <p className = "reblog-title">{this.state.title}</p> 
                {postBody} 
            </div>
            )
        }
    }
    render(){
        let originalPost;
        if (this.props.rebloggedPost.reblogged_post_id) {
            originalPost = this.props.posts[this.props.rebloggedPost.reblogged_post_id];
        }
            while (true) {
                originalPost = this.props.posts[originalPost.reblogged_post_id];
              
                if (!originalPost.reblogged_post_id){
                   break;
                }
            }        
    
        return(
            <div className="content-container">
               <section className = "author-username">
                    {this.props.currentUser.username}  
                    <span className = "author-header">
                    &nbsp;<i className="fas fa-retweet"></i> {originalPost.author.username}
                    </span>
                </section>
                <form className = "text-form" onSubmit={this.handleSubmit}>
                    {this.renderPostContent()} 
                    <textarea
                        className = "body-input"
                        type = "text"
                        value = {this.state.reblog_body}
                        onChange = {this.handleInput("reblog_body")}
                        placeholder = "Your text here"
                    ></textarea>
                    <input 
                        className = "tags-input"
                        type = "text"
                        value = {this.state.reblog_tags}
                        onChange = {this.handleInput("reblog_tags")}
                        placeholder = "seperate #tags with spaces"
                    />
                    <section className = "controls-container">
                        <a onClick = {this.props.closeModal} className = "close-modal">Close</a>
                        <input type = "submit" className = "submit-post" value = {this.props.formType}/>
                    </section>
                </form>
        </div>
        )
    }
}
export default Reblog;