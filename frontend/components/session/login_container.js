import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login , clearSessionErrors } from "../../actions/session_actions"
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state) => {
    // debugger;
    return{
        errors: state.errors.session,
        formType: "Log In"
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        processLogin: (userForm) => dispatch(login(userForm)),
        clearErrors: () => dispatch(clearSessionErrors()),

    }
}
export default withRouter (connect(mapStateToProps, mapDispatchToProps)(LoginForm));