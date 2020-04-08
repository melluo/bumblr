import React from "react";

class PhotoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: this.props.post.title,
            body: this.props.post.body,
            tags: this.props.post.tags,
            post_type: "photo",
            user_id: this.props.post.user_id,
            id: this.props.post.id,
            imageUrl: null,
            imageFile: null
        }
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field) {
        return e => this.setState({
            [field]: e.target.value
        });
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
        formData.append("post[body]", this.state.body);
        formData.append("post[post_type]", this.state.post_type);
        formData.append("post[tags]", this.state.tags);
        formData.append("post[user_id]", this.state.user_id);
        formData.append("post[id]", this.state.id);
        if (this.state.imageFile) {
            formData.append("post[image]", this.state.imageFile);
        } 
        this.props.processPost(formData, this.state.id).then(this.props.closeModal());
    }
    renderPreview(){
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
                <label for = "file">
                    <i className="fas fa-camera"></i>
                    <div>Upload photo</div>
                    <i className="far fa-laugh-beam"></i>
                </label>
                </div>
            )
        }
    }
    render(){
        let togglePost;
        if (!this.state.imageUrl){
            togglePost = <label className = "submit-post-hidden">{this.props.formType}</label> 
        } else{
            togglePost = <input type = "submit" className = "submit-post" value = {this.props.formType}/>

        }
        return(
            <div className = "content-container">
            <section className = "author-username">
                {this.props.currentUser.username}
            </section>
                <form className = "photo-form" onSubmit = {this.handleSubmit}>
                    {this.renderPreview()}
                    <textarea 
                        className = "body-input"
                        type = "text"
                        value = {this.state.body}
                        onChange = {this.handleInput("body")}
                        placeholder = "Add a caption, if you like"
                    />
                    <input 
                        className = "tags-input"
                        type = "text"
                        value = {this.state.tags}
                        onChange = {this.handleInput("tags")}
                        placeholder = "seperate #tags with spaces"
                    />
                <section className = "controls-container">
                    <button onClick = {this.props.closeModal} className = "close-modal">Close</button>
                    {togglePost}
                </section>
                </form>
            </div>
        )
    }
     
}

export default PhotoForm;