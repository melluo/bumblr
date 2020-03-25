import React from 'react';
import { Route , Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SignupFormContainer from "./session/signup_container";
import FrontPageContainer from "./frontpage/frontpage_container";
export default () => (
    <Switch>
        <Route path = "/login" component = {SignupFormContainer}/>
        <Route exact path = "/" component={FrontPageContainer}/>
    </Switch>
)