import React from 'react';

class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '', 
            password: '',
            username: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }
    handleDemo(e){
        e.preventDefault();
        this.props.processForm({
            email: "demouser@demo.com",
            password: "hunter12",
            username: "demouser"
        })
    }
    handleInput(type){  //updating user field, type will be user
        return (e) => {
            this.setState({[type]: e.target.value });
        };
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.processForm(this.state)
            .then(() => this.props.history.push("/dashboard");
    }
    renderErrors(){
        return(
            <ul className='form-errors'>
                {this.props.errors.map((error) => (
                    <li key={error}> {error} </li>)} 
            </ul>
        );
    }
    render() {
        return (
            <div className="session-form">
                <h2> Sign Up! </h2>
                <form>
                <label> Email:
                <input 
                    type = "text"
                    value = {this.state.email}
                    placeholder = "Email"
                    onChange = {this.handleInput("email")} 
                    />
                </label>
                <label> Password:
                <input 
                    type = "password"
                    value = {this.state.password}
                    placeholder = "Password"
                    onChange = {this.handleInput("email")} 
                    />
                </label>
            
                <label> Username:
                <input 
                    type = "text"
                    value = {this.state.username}
                    placeholder = "Username"
                    onChange = {this.handleInput("text")} 
                    />
                    <button onClick = {this.handleSubmit}> Sign Up! </button>
                </label>
                <button onClick = {this.handleDemo}> Demo Login </button>
                </form>

            </div>
        );
    }
}

export default Signup;