import React from "react";

const Avatar = ({avatarUrl, openModal, authorId}) => {
    return(
        <div className = "avatar-container">
            <img className = "user-avatar" src = {avatarUrl} authorid = {authorId} onClick = {openModal}/>
        </div>
    )
}

export default Avatar;

