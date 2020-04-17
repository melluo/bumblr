import React from "react";

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search: ""
        };
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount(){
        this.props.fetchAllUsers();
    }

    handleInput(e){
        e.preventDefault();
        this.setState({
            search: e.target.value
        });
        let users = this.props.users.map((user) => {
            if (user.username.includes(e.target.value)){
               return user;
            }    
        }); 
        let filteredUsers = users.filter((user) => typeof user !== "undefined")
        if (e.target.value){
            this.props.openModal("Search Result", null, filteredUsers)
        } else{
            this.props.closeModal();
        }
    }
    render(){
        return(
            <>
            <i className = "fas fa-search"></i>
            <input 
                className = "search-bar" 
                onChange = {this.handleInput} 
                value = {this.state.search}
                placeholder = "Search bumblr">
            </input>
            </>
        )
    }


}

export default SearchBar;