import * as LikeApiUtil from "../util/like_api_util";

export const RECEIVE_USER_LIKES = "RECEIVE_USER_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const receiveUserLikes = (likes) => {
    return {
        type: RECEIVE_USER_LIKES,
        likes
    }
}

const receiveLike = (like) => {
    return {
        type: RECEIVE_LIKE,
        like
    }
}

const removeLike = (like) => {
    return {
        type: REMOVE_LIKE,
        like
    }
}

export const fetchUserLikes = (user_id) => dispatch => 
    LikeApiUtil.fetchUserLikes(user_id).then((likes) => 
    dispatch(receiveUserLikes(likes))
    );

export const like = (post_id) => dispatch => 
    LikeApiUtil.like(post_id).then((like) =>
    dispatch(receiveLike(like))
    );

export const unlike = (id) => dispatch => 
    LikeApiUtil.unlike(id).then((like) =>
    dispatch(removeLike(like))
    );