import React from "react";
import Avatar from "../../avatar/avatar";

class SearchResult extends React.Component{
    constructor(props){
        super(props);
    }
    handleClick(e){
        e.preventDefault();
        e.stopPropagation();
    }
    
    render(){
        let searchLength = 0;
        let searchResults = this.props.users.map((user) => {
            searchLength += 1;
            return (
                <li className = "search-user" id = "search-user" key = {user.id} onClick = {() => this.props.openModal("User Show")} authorid = {user.id}>
                    <Avatar 
                        onClick = {() => this.props.openModal("User Show")} 
                        authorId = {user.id}
                        avatarUrl = {user.avatarUrl}
                    />
                    <div className = "search-username">{user.username}</div>
                    {this.props.currentUser.following.includes(user.id) || user.id === this.props.currentUser.id ? 
                    <button 
                        className = "unfollow-button" 
                        onClick = {(e) => {
                            this.handleClick(e);
                            this.props.unfollow(user.id);
                            this.props.closeModal();
                        }}>Unfollow
                    </button> :
                    <button 
                        className = "follow-button" 
                        onClick = {(e) => {
                            this.handleClick(e);
                            this.props.follow(user.id);
                            this.props.closeModal();
                        }}>Follow
                    </button>}
                </li>
            )
        })
  
        if( searchLength > 0 ){
            return(
                <ul className = "search-list">
                    {searchResults}
                </ul>
            )
        } else{
            return(
                <ul className = "search-list">
                    <div className = "no-users">No users to display.</div>
                </ul>
            )
        }
        
    }
}

export default SearchResult;