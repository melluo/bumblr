import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const  _nullUser = {
    currentUser: null,
};
const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state); //not accidently mutate state

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // debugger;
            return Object.assign({}, state, { currentUser: action.currentUser });
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        default:
            return state;
    }

}

export default sessionReducer;