import React from "react";

const Avatar = ({avatarUrl}) => {
    return(
        <div className = "avatar-container">
            <img className = "user-avatar" src = {avatarUrl}/>
        </div>
    )
}

export default Avatar;