import React from 'react';

class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '', 
            password: '',
            username: '',
        };
    }
    handleInput(type){  //updating user field, type will be user
        return (e) => {
            this.setState({[type]: e.target.value });
        };
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.createUser(this.state)
            .then(() => this.props.history.push("/dashboard");
    }
    update()
    render() {
        return (
            <div className="session-form">
            </div>
        )
    }
}