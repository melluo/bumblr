import React from 'react';
import { connect } from 'react';
import SignUp from './signup';
import { signup } from '../../actions/session_actions';

mapDispatchToProps = (dispatch) => {
    signup: () => dispatch(signup),
    clearErrors: () => dispatch(clearErrors()),
    
};

export default connect(null, mapDispatchToProps)(SignUp);
