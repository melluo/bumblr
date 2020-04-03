import React from 'react';

const PostNavBar = ({currentUser, openModal}) => {
    return(
        <div className="post-navbar-container">
            <section onClick={() => openModal("Text Post")}>
                <div className="text-post-button">Aa</div>
                    <span className="button-text">Text</span>
            </section>
            <section onClick={() => openModal("Photo Post")}>
                <i className="fas fa-camera-retro"></i>
                    <span className="button-text">Photo</span>
            </section>
            <section onClick={() => openModal("Quote Post")}>
                <i className="fas fa-quote-left"></i>
                    <span className="button-text">Quote</span>
            </section>
            <section onClick={() => openModal("Link Post")}>
                <i className="fas fa-link"></i>
                <span className="button-text">Link</span>
            </section>
        </div>
    )

}

export default PostNavBar;