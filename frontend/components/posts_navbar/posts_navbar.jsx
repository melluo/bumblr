import React from 'react';

const PostNavBar = ({currentUser, openModal}) => {
    return(
        <div className="post-navbar-container">
            <div onClick={() => openModal("Text Post")}>
                <div className="text-post-button">
                    <span>Text</span>
                </div>
            </div>
            <div onClick={() => openModal("Photo Post")}>
                <i class="fas fa-camera-retro"></i>
                    <span>Photo</span>
            </div>
            <div onClick={() => openModal("Quote Post")}>
                <i class="fas fa-quote-left"></i>
                    <span>Quote</span>
            </div>
            <div onClick={() => openModal("Link Post")}>
                <i class="fas fa-link"></i>
                <span>Link</span>
            </div>
        </div>
    )

}