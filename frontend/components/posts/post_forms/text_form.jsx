import React from "react";

class TextForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.post;
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
    
    render(){

        let title = (this.props.post.reblogged_post_id) ?
            <p className = "reblog-title">{this.state.title}</p> :
            <input 
                className = "title-input"
                type = "text" 
                value = {this.state.title} 
                onChange = {this.handleInput("title")} 
                placeholder = "Title" 
            />

        let body = (this.props.post.reblogged_post_id) ? 
            <div className = "reblog-body"><p></p>{this.state.body}</div> :
            <textarea
                className = "body-input"
                type = "text"
                value = {this.state.body}
                onChange = {this.handleInput("body")}
                placeholder = "Your text here"
            ></textarea>
        
        let tags = (!this.props.post.reblogged_post_id) ?
            <input 
                className = "tags-input"
                type = "text"
                value = {this.state.tags}
                onChange = {this.handleInput("tags")}
                placeholder = "seperate #tags with spaces"
            /> : <span></span>
        
        let reblogBody = (this.props.post.reblogged_post_id) ? 
            <textarea
                className = "body-input"
                type = "text"
                value = {this.state.reblog_body}
                onChange = {this.handleInput("reblog_body")}
                placeholder = "Your text here"
            ></textarea> : <span></span>
        let reblogTags = (this.props.post.reblogged_post_id) ?
            <input 
                className = "tags-input"
                type = "text"
                value = {this.state.reblog_tags}
                onChange = {this.handleInput("reblog_tags")}
                placeholder = "seperate #tags with spaces"
            /> : <span></span>

        let togglePost;
        if (this.state.title === "" && this.state.body === ""){
            togglePost = <label className = "submit-post-hidden">{this.props.formType}</label> 
        } else{
            togglePost = <input type = "submit" className = "submit-post" value = {this.props.formType}/>

        }
        
        let originalPostContent = (this.props.post.reblogged_post_id) ? 
            <div className = "original-text-post">
                {title}
                {body}
                {tags}
            </div> : <div>
            {title}
            {body} 
            {tags}
            </div>
        
        return(
            <div className="content-container">
                <section className = "author-username">
                    {this.props.currentUser.username}
                </section>
                <form className = "text-form" onSubmit={this.handleSubmit}>
                   {originalPostContent}
                    {reblogBody}
                    {reblogTags}
                    <section className = "controls-container">
                        <a onClick = {this.props.closeModal} className = "close-modal">Close</a>
                        {togglePost}
                    </section>
                </form>
        </div>
        )
    }
}
export default TextForm;