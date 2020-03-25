import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const  _nullUser = {
    currentUser: null,
};
export default (state = _nullUser, action) => {
    Object.freeze(state); //not accidently mutate state

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { currentUser: action.currentUser });
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        default:
            return oldState;
    }

}

