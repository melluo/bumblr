import React from "react";
import Avatar from "../../avatar/avatar";

class SearchResult extends React.Component{
    constructor(props){
        super(props);
    }
   
    render(){
        let searchLength = 0;
        let searchResults = this.props.users.map((user) => {
            searchLength += 1;
            return (
                <li className = "search-user" key = {user.id} onClick = {() => this.props.openModal("User Show")} authorid = {user.id}>
                    <Avatar 
                        onClick = {() => this.props.openModal("User Show")} 
                        authorId = {user.id}
                        avatarUrl = {user.avatarUrl}
                    />
                    <div className = "search-username">{user.username}</div>
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