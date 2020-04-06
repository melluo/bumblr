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
        return(
            <div className="form-container">
                <section className = "username">
                    {this.props.currentUser.username}
                </section>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        value={this.state.title} 
                        onChange={this.handleInput("title")} 
                        placeholder="Title" 
                    />
                    <input 
                        type="text"
                        value={this.state.body}
                        onChange={this.handleInput("body")}
                        placeholder="Your text here"
                    />
                    <input 
                        type="text"
                        value={this.state.tags}
                        onChange={this.handleInput("tags")}
                        placeholder="#tags"
                    />
                    <button onClick={this.props.closeModal} className="close-modal">Close</button>
                    <input type="submit" value={this.props.formType}/>
                </form>
        </div>
        )
    }
}
export default TextForm;