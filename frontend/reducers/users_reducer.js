import{
    RECEIVE_FOLLOWERS,
    RECEIVE_FOLLOW,
    REMOVE_FOLLOW
} from "../actions/follow_actions";

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, newState, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_FOLLOWERS:
            return action.followers;
        case RECEIVE_FOLLOW:
            const currentUserId = action.follow.follower_id;
            const followeeId = action.follow.followee_id;
            newState[currentUserId].following.push(followeeId);
            newState[followeeId].followers.push(currentUserId);
            return newState;
        case REMOVE_FOLLOW:
            const index = newState[currentUserId].following.indexOf(followeeId);
            newState[currentUserId].following.splice(index, 1);
            const index2= newState[followeeId].followers.indexOf(currentUserId);
            newState[followeeId].followers.splice(index2, 1);
            return newState;
        default:
            return oldState;
    }
};

export default usersReducer;