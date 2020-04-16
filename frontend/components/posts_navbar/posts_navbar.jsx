import React from 'react';
import Avatar from "../avatar/avatar";

class PostNavBar extends React.Component {
    constructor(props){
        super(props);
    }
    renderAvatar(){
        let avatarUrl;
        if (!this.props.currentUser.avatarUrl){
            avatarUrl = window.defaultAvatar;
        } else{
            avatarUrl = this.props.currentUser.avatarUrl;
        }
        return(
            <Avatar
                authorId = {this.props.currentUser.id}
                openModal = {() => this.props.openModal("User Show")}
                avatarUrl = {avatarUrl}
            />
        )
    }
    render(){
        return(
            <div className = "postnavbar">
            {this.renderAvatar()}
            <div className="post-navbar-container">
                <section onClick={() => this.props.openModal("Text Post")}>
                    <div className="text-post-button post-button">Aa</div>
                        <span className="button-text">Text</span>
                </section>
                <section onClick={() => this.props.openModal("Photo Post")}>
                    <i className="fas fa-camera-retro post-button"></i>
                        <span className="button-text">Photo</span>
                </section>
                <section onClick={() => this.props.openModal("Quote Post")}>
                    <i className="fas fa-quote-left post-button"></i>
                        <span className="button-text">Quote</span>
                </section>
                <section onClick={() => this.props.openModal("Link Post")}>
                    <i className="fas fa-link post-button"></i>
                        <span className="button-text">Link</span>
                </section>
            </div>
            </div>
        )
    }

}

export default PostNavBar;