import {
    RECEIVE_ALL_POSTS,
    RECEIVE_POST,
    REMOVE_POST
} from "../actions/post_actions";

import {
    RECEIVE_USER_LIKES,
    RECEIVE_LIKE,
    REMOVE_LIKE
} from "../actions/like_actions";

const postsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            return action.posts;
        case RECEIVE_POST:
            newState[action.post.id] = action.post;
            return newState;
        case REMOVE_POST:
            delete newState[action.postId];
            return newState;
        case RECEIVE_USER_LIKES:
            return action.likes;
        case RECEIVE_LIKE:
            let user = action.like.user_id;
            let post = action.like.post_id;
            newState[post].likers.push(user);
            return newState;
        case REMOVE_LIKE:
            user = action.like.user_id;
            post = action.like.post_id;
            const index = newState[post].likers.indexOf(user);
            newState[post].likers.splice(index, 1);
            return newState;
        default: 
            return oldState;
    }

};
export default postsReducer;

