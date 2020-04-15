import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from "../navbar/navbar_container";

class Splash extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchAllPosts();
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
    
    render() {
        return(
            <>
            <NavBar />
            {this.renderBackground()}
            <div className = "splash-container">
                <div className = "logo">bumblr</div>
                    <div className = "description"> See what all the buzz is about</div>
                <Link to = "/signup" className = "signup">Get Started</Link>
                <Link to = "/login" className = "login">Log In</Link>
            </div>
            </>
        )
    }

}

export default Splash;