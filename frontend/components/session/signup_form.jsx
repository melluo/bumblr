import React from 'react';

class SignUpForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "", 
            password: "",
            username: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }
    componentDidMount(){
        this.props.clearErrors();
        this.props.fetchAllPosts();
    }
    handleDemo(e){
        e.preventDefault();
        this.props.processLogin({
            email: "demouser@demo.com",
            password: "hunter12",
            username: "demouser"
        })
    }
    handleInput(type){  //updating user field, type will be user
        return (e) => {
            this.setState({
                [type]: e.currentTarget.value 
            });
        };
    }
    handleSubmit(e){
        e.preventDefault(); //default is send an http request
        this.props.processForm(this.state)  //userForm aka the username/password/email
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
        let backgrounds = this.props.posts.slice(0, 4).map((post) => {
            return(
                <>
                <img className = "background-img" src = {post.imageUrl}/>
                <div className = "background-author">Posted by <span className = "background-author-name">{post.author.username}</span></div>
                </>
            )
        })
        return backgrounds[3];
    }
    render() {
        return (
            <>
            {this.renderBackground()}
            <div className="form-container">
                <h2 className="logo"> bumblr </h2>
                <form className="session-form" onSubmit = {this.handleSubmit}>
                    <input 
                        type = "text"
                        value = {this.state.email}
                        id = "email"
                        placeholder = "Email"
                        onChange = {this.handleInput("email")} 
                    />
                    <input 
                    type = "text"
                    value = {this.state.username}
                    id = "username"
                    placeholder = "Username"
                    onChange = {this.handleInput("username")} 
                    />
                    <input 
                        type = "password"
                        value = {this.state.password}
                        id = "password"
                        placeholder = "Password"
                        onChange = {this.handleInput("password")} 
                    />
                    {this.renderErrors()}
                    <button
                        type = "submit"
                        id = "submit-form"
                    >{this.props.formType}</button>
                    <button className="demo-login" onClick = {this.handleDemo}> Demo Login </button>
                </form>
            </div>
            </>
        );
    }
}

export default SignUpForm;