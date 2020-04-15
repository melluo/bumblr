import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
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
        let backgrounds = this.props.posts.slice(0, 4).map((post) => {
            return(
                <>
                <img className = "background-img" src = {post.imageUrl}/>
                <div className = "background-author">Posted by <span className = "background-author-name">{post.author.username}</span></div>
                </>
            )
        })
        return backgrounds[Math.floor(Math.random() * backgrounds.length)];
    }
    render(){
       
        return (
            <>
            {this.renderBackground()}
            <div className="form-container">
                <h2 className='logo'> bumblr </h2>
                <form className="session-form" onSubmit={this.handleSubmit}>
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
                    {this.renderErrors()}
                    <button
                        type = "submit"
                        id = "submit-form"
                    > {this.props.formType}</button>
                    <button className="demo-login" onClick={this.handleDemo}>Demo Login</button>
                </form>
            </div>
            </>
        )
    }
}

export default LoginForm;