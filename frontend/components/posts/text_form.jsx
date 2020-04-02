import React from 'react';
import { withRo
class TextForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            body: "",
            post_type: "text",
            author_id: this.props.currentUser.id
        }
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
            <div className="form_container">
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
                <button onClick={this.props.closeModal} className="close-modal">Close</button>
                <input type="submit" value={this.props.formType}/>
            </form>
        </div>
        )
    }
}