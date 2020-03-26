import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login , clearSessionErrors } from "../../actions/session_actions"


const mapStateToProps = (state) => {
    return{
        errors: state.errors
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        processLogin: (userForm) => dispatch(login(userForm)),
        clearSessionErrors: () => dispatch(clearSessionErrors()),


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);