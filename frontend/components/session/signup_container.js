import { connect } from 'react';
import SignUpForm from "./signup_form";
import { createUser, clearSessionErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => {
    return{
    errors: state.errors
}}

const mapDispatchToProps = (dispatch) => {
    return{
    processForm: (userForm) => dispatch(createUser(userForm)),
    clearErrors: () => dispatch(clearSessionErrors()),
}};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
