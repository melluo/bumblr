import React from "react";
import PostNavBar from "../posts_navbar/posts_navbar_container";
import NavBar from "../navbar/navbar_container";

class Dashboard extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className = "dashboard-container">
                <NavBar />
                <section className = "post-navbar">
                    <PostNavBar />
                </section>
            </div>
        )
    }
}

export default Dashboard;