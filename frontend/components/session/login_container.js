import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login , clearSessionErrors } from "../../actions/session_actions"
import { withRouter } from 'react-router-dom';
import { fetchAllPosts } from "../../actions/post_actions";


const mapStateToProps = (state) => {
    return{
        errors: state.errors.session,
        posts: Object.values(state.entities.posts),
        formType: "Log In"
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        processLogin: (userForm) => dispatch(login(userForm)),
        fetchAllPosts: () => dispatch(fetchAllPosts()),
        clearErrors: () => dispatch(clearSessionErrors()),

    }
}
export default withRouter (connect(mapStateToProps, mapDispatchToProps)(LoginForm));