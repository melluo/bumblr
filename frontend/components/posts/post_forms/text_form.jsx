import React from 'react';

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
        this.props.createPost(this.state)
            .then(() => this.props.closeModal());
    }
    
    render(){
        let togglePost;
        if (this.state.title === "" && this.state.body === ""){
            togglePost = <label className = "submit-post-hidden">{this.props.formType}</label> 
        } else{
            togglePost = <input type = "submit" className = "submit-post" value = {this.props.formType}/>

        }

        return(
            <div className="text-form-container">
                <section className = "author-username">
                    {this.props.currentUser.username}
                </section>
                <form className = "text-form" onSubmit={this.handleSubmit}>
                    <input 
                        className = "title-input"
                        type = "text" 
                        value = {this.state.title} 
                        onChange = {this.handleInput("title")} 
                        placeholder = "Title" 
                    />
                    <textarea
                        className = "body-input"
                        type = "text"
                        value = {this.state.body}
                        onChange = {this.handleInput("body")}
                        placeholder = "Your text here"
                    ></textarea>
                    <input 
                        className = "tags-input"
                        type = "text"
                        value = {this.state.tags}
                        onChange = {this.handleInput("tags")}
                        placeholder = "#tags"
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
export default TextForm;