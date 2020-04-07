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
        if (this.state.imageFile) {
            formData.append("post[photo]", this.state.imageFile);
        } 
        this.props.processPost(formData).then(this.props.closeModal());
    }

    render(){
        return(
            <div className = "content-container">
                <form className="photo-form" onSubmit={this.handleSubmit}>
                    <input 
                        type="file"
                        onChange={this.handleFile} 
                    />
                    <textarea 
                        className="body-input"
                        type="text"
                        value={this.state.body}
                        onChange={this.handleInput("body")}
                        placeholder="Your text here"
                    />
                    <input 
                        className = "tags-input"
                        type = "text"
                        value = {this.state.tags}
                        onChange = {this.handleInput("tags")}
                        placeholder = "seperate #tags with spaces"
                    />
                <section className = "controls-container">
                    <button onClick={this.props.closeModal} className="close-modal">Close</button>
                    <input className="submit-post" type="submit" value={this.props.formType} />
                </section>
                </form>
            </div>
        )
    }
     
}

export default PhotoForm;