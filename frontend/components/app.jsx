import React from 'react';
import Modal from "./modal/modal";
import { Route , Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SignupFormContainer from "./session/signup_container";
import LogInFormContainer from "./session/login_container";
import Splash from "./splash/splash_container";
import DashboardContainer from "./dashboard/dashboard_container";
import FollowingContainer from "./following_page/following_container";
import LikesContainer from "./likes_page/likes_container";
// import FrontPageContainer from "./frontpage/frontpage_container";

const App = () => (
    <div>
    <Modal />
    <Switch>
        <AuthRoute path = "/login" component = {LogInFormContainer}/>
        <AuthRoute path = "/signup" component = {SignupFormContainer}/>
        <ProtectedRoute path = "/dashboard" component = {DashboardContainer}/>
        <ProtectedRoute path = "/following" component = {FollowingContainer}/>
        <ProtectedRoute path = "/likes" component = {LikesContainer}/>
        <AuthRoute exact path = "/" component = {Splash} />
    </Switch>
    </div>
)

export default App;

//<Route exact path = "/" component={FrontPageContainer}/>