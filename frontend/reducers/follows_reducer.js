import{
    RECEIVE_FOLLOWERS,
    RECEIVE_FOLLOW,
    REMOVE_FOLLOW
} from "../actions/follow_actions";

const followsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type){
        case RECEIVE_FOLLOWERS:
            return action.followers
        case RECEIVE_FOLLOW:
            newState[action.follow.id] = action.follow;
            return newState;
        case REMOVE_FOLLOW:
            delete newState[action.follow.id];
            return newState;
        default:
            return state;
    }
}

export default followsReducer;