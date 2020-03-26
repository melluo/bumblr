import {  CLEAR_SESSION_ERRORS, RECEIVE_SESSION_ERRORS } from "../actions/session_actions";

const sessionErrorReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case CLEAR_SESSION_ERRORS:
            return [];
        default:
            return state;
    }
}
export default sessionErrorReducer;