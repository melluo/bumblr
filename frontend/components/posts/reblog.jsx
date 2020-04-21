import React from 'react';

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
    renderPhotoOrTitle(){
        return(
            (this.props.originalPost && this.props.originalPost.imageUrl) ? 
            <img className="image-preview" src={this.props.originalPost.imageUrl} /> :
            <p className="title-input">{this.state.title}</p> 
        )
    }
    render(){
        return(
            <div className="content-container">
                <section className = "author-username">
                    {this.props.currentUser.username}
                </section>
                <form className = "text-form" onSubmit={this.handleSubmit}>
                    {this.renderPhotoOrTitle()}
                    <div className="body-input"><p></p>{this.state.body}</div> 
                    <div className="tags-input"><p></p>{this.state.tags}</div> 
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