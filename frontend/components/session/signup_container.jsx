import React from 'react';
import { connect } from 'react';
import SignUp from './signup';
import { signup, clearSessionErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
    formType: "Sign Up",
    errors: state.errors
})
mapDispatchToProps = (dispatch) => {
    processForm: (userForm) => dispatch(signup(userForm)),
    clearErrors: () => dispatch(clearSessionErrors()),
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
