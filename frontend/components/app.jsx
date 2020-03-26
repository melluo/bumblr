import React from 'react';
import { Route , Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SignupFormContainer from "./session/signup_container";
// import FrontPageContainer from "./frontpage/frontpage_container";

const App = () => (
    <Switch>
        <AuthRoute path = "/login" component = {SignupFormContainer}/>
    </Switch>
)

// <Route exact path = "/" component={FrontPageContainer}/>
export default App;