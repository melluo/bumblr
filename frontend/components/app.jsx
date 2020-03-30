import React from 'react';
import { Route , Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SignupFormContainer from "./session/signup_container";
import LogInFormContainer from "./session/login_container";
import Splash from "./splash/splash";
// import FrontPageContainer from "./frontpage/frontpage_container";

const App = () => (
    <>
    <Switch>
        <AuthRoute path = "/login" component = {LogInFormContainer}/>
        <AuthRoute path = "/signup" component = {SignupFormContainer}/>
        <AuthRoute exact path = "/" component = {Splash} />
    </Switch>
    </>
)

export default App;

//<Route exact path = "/" component={FrontPageContainer}/>