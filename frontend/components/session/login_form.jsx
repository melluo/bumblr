import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }
    handleDemo(e){
        e.preventDefault();
        this.props.processLogin({
            email: "demouser@demo.com",
            password: "hunter12"
        });
    }
    handleInput(type){ 
        return (e) => {
            this.setState({
                [type]: e.target.value 
            });
        };
    }
    handleSubmit(e){
        e.preventDefault(); //default is send an http request
        // debugger
        this.props.processLogin(this.state)  //userForm aka the username/password/email
            .then(() => this.props.history.push("/dashboard")); //async promise
    }   //forwards us to /dashboard once user is created

    renderErrors(){
        return(
            <ul className='form-errors'>
                {this.props.errors.map((error) => (
                    <li key={error}> {error} </li>))} 
            </ul>
        )
    }
    renderBackground(){
        //map through the posts
    }
    render(){
       
        return (
            <div className="login-form">
                <h2 className='logo'> Bumblr </h2>
                {this.renderErrors()}
                <form className="content" onSubmit={this.handleSubmit}>
                    <input
                        type = "text"
                        id = "email"
                        value = {this.state.email}
                        onChange = {this.handleInput('email')}
                        placeholder = "Email"
                    />
                    <input
                        type = "password"
                        id = "password"
                        value = {this.state.password}
                        onChange = {this.handleInput('password')}
                        placeholder = "Password"
                    />
                    <input
                        type = "submit"
                        id = "submit-form"
                        value = {this.props.formType}
                    />
                    <button className="demo-login" onClick={this.handleDemo}>Demo Login</button>
                </form>
            </div>
        )
    }
}

export default LoginForm;