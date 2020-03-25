import * as SessionApiUtils from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";
export const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})
export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})
const receiveSessionErrors = (errors) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}
const clearSessionErrors = () => (
    type: CLEAR_SESSION_ERRORS
);

export const signup = (userForm) => dispatch => {
    return SessionApiUtils.signup(userForm).then( (user) => {
        return dispatch(receiveCurrentUser(user));
    }, (errors) => {
        return dispatch(receiveSessionErrors(errors.responseJSON));
    }); //after signup promise is fullfilled, dispatch to change state with recieve current user and errors (errors.responseJSON)
};
export const login = (userForm) => dispatch => {
    return SessionApiUtils.login(userForm).then( (user) => {
        return dispatch(receiveCurrentUser(user));
    }, (errors) => {
        return dispatch(receiveSessionErrors(errors.responseJSON));
    });
};


export const logout = () => dispatch => {
    return SessionApiUtils.logout().then( () => {
        return dispatch(logoutCurrentUser());
    });
};
