import React from "react";

class QuoteForm extends React.Component{
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
        let togglePost;
        if (this.state.title === ""){
            togglePost = <label className = "submit-post-hidden">{this.props.formType}</label> 
        } else{
            togglePost = <input type = "submit" className = "submit-post" value = {this.props.formType}/>

        }
 
        return(
            <div className="content-container">
                <section className = "author-username">
                    {this.props.currentUser.username}
                </section>
                <form className = "quote-form" onSubmit={this.handleSubmit}>
                    <input 
                        className = "quote-input"
                        type = "text" 
                        value = {this.state.title} 
                        onChange = {this.handleInput("title")} 
                        placeholder = "Quote" 
                    />
                    <input
                        className = "source-input"
                        type = "text"
                        value = {this.state.body}
                        onChange = {this.handleInput("body")}
                        placeholder = "Source"
                    ></input>
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

export default QuoteForm;