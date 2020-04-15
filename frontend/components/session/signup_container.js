import { connect } from 'react-redux';
import SignUpForm from "./signup_form";
import { login, createUser, clearSessionErrors } from '../../actions/session_actions';
import { fetchAllPosts } from "../../actions/post_actions";

const mapStateToProps = (state) => {
    return{
    errors: state.errors.session, //this pulls in whats in my root reducer (becomes the top level keys of redux store) key of errors
    posts: Object.values(state.entities.posts),
    formType: "Sign Up" 
}}
 
//store is single source of truth, in charge of application state, gets the changes from our backends, listens to reducers to change the state
const mapDispatchToProps = (dispatch) => {
    return{
    processForm: (userForm) => dispatch(createUser(userForm)),
    processLogin: (userForm) => dispatch(login(userForm)),
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    clearErrors: () => dispatch(clearSessionErrors()),
}};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);

//containers themselves are how redux interacts with react (connect literally connects redux to react form)
//withRouter in container props.history doesnt exist