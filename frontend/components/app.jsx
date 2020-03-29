import React from 'react';
import { Route , Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SignupFormContainer from "./session/signup_container";
import LogInFormContainer from "./session/login_container";
// import FrontPageContainer from "./frontpage/frontpage_container";

const App = () => (
    <>
    <p>React Works</p>
    <Switch>
        <AuthRoute path = "/login" component = {LogInFormContainer}/>
        <AuthRoute path = "/signup" component = {SignupFormContainer}/>
    </Switch>
    </>
)

export default App;

//<Route exact path = "/" component={FrontPageContainer}/>