import React from "react";

class PhotoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: this.props.post.title,
            body: this.props.post.body,
            tags: this.props.post.tags,
            post_type: "photo",
            author_id: this.props.post.author_id,
            id: this.props.post.id,
            imageUrl: (this.props.post.imageUrl) ? this.props.post.imageUrl : null,
            imageFile: null,
            reblogged_post_id: this.props.post.reblogged_post_id,
            reblog_body: this.props.post.reblog_body,
            reblog_tags: this.props.post.reblog_tags
        }
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type){ 
        return (e) => {
            this.setState({
                [type]: e.target.value 
            });
        };
    }

    handleFile(e){
        const file = e.currentTarget.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
        this.setState({ imageUrl: reader.result, imageFile: file });
        };
        if (file) {
        reader.readAsDataURL(file);
        } else {
        this.setState({ imageUrl: "", imageFile: null });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        if (this.state.imageFile){
            formData.append("post[body]", this.state.body);
            formData.append("post[post_type]", this.state.post_type);
            formData.append("post[tags]", this.state.tags);
            formData.append("post[author_id]", this.state.author_id);
            formData.append("post[id]", this.state.id);
            formData.append("post[image]", this.state.imageFile);
            this.props.processPost(formData, this.state.id).then(this.props.closeModal());
        } else if (this.props.formType === "Save"){
            if (this.state.body) formData.append("post[body]", this.state.body);
            if (this.state.tags) formData.append("post[tags]", this.state.tags);
            if (this.state.reblogged_post_id) formData.append("post[reblogged_post_id]", this.state.reblogged_post_id);
            if (this.state.reblog_body) formData.append("post[reblog_body]", this.state.reblog_body);
            if (this.state.reblog_tags) formData.append("post[reblog_tags]", this.state.reblog_tags);
            this.props.processPost(formData, this.state.id).then(this.props.closeModal());
        }

    }
    renderPreview(){
        if (this.state.reblogged_post_id) {
            let originalPost = this.props.post;
            if (this.props.post.reblogged_post_id && typeof this.props.posts[this.props.post.reblogged_post_id] !== "undefined") {
                originalPost = this.props.posts[this.props.post.reblogged_post_id];
            }
                while (originalPost.reblogged_post_id && typeof this.props.posts[originalPost.reblogged_post_id] !== "undefined") {
                    originalPost = this.props.posts[originalPost.reblogged_post_id];
                }   
        
            return(
                <img className = "image-preview" src  = {originalPost.imageUrl} />
            )
        } else {
            if(this.state.imageUrl){
                return(
                    <img className = "image-preview" src = {this.state.imageUrl}/>
                )
            } else{
                return(
                    <div className = "upload-container">
                    <input
                        className = "upload-image"
                        type = "file"
                        id = "file"
                        onChange = {this.handleFile} 
                    />
                    <label htmlFor = "file">
                        <i className="fas fa-camera"></i>
                        <div>Upload photo</div>
                        <i className="far fa-laugh-beam"></i>
                    </label>
                    </div>
                )
            }
        }
    }
    render(){
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
        if (!this.state.imageUrl && !this.state.reblogged_post_id){
            togglePost = <label className = "submit-post-hidden">{this.props.formType}</label> 
        } else{
            togglePost = <input type = "submit" className = "submit-post" value = {this.props.formType}/>

        }

        let originalPostContent = (this.props.post.reblogged_post_id) ? 
            <div className = "original-photo-post">
                {this.renderPreview()}
                {body}
                {tags}
            </div> : <div>
            {this.renderPreview()}
            {body} 
            {tags}
            </div>

        return(
            <div className = "content-container">
            <section className = "author-username">
                {this.props.currentUser.username}
            </section>
                <form className = "photo-form" onSubmit = {this.handleSubmit}>
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

export default PhotoForm;