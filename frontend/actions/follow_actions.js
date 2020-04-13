import * as FollowApiUtil from "../util/follow_api_util";

export const RECEIVE_FOLLOWERS = "RECEIVE_FOLLOWERS";
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

const receiveFollowers = (followers) => {
    return {
        type: RECEIVE_FOLLOWERS,
        followers
    }
}

const receiveFollow = (follow) => {
    return {
        type: RECEIVE_FOLLOW,
        follow
    }
}

const removeFollow = (follow) => {
    return {
        type: REMOVE_FOLLOW,
        follow
    }
}

export const fetchFollowers = (user_id) => dispatch => 
    FollowApiUtil.fetchFollowers(user_id).then((followers) => 
        dispatch(receiveFollowers(followers))
    );

export const follow = (followee_id) => dispatch => 
    FollowApiUtil.follow(followee_id).then((follow) =>
        dispatch(receiveFollow(follow))
    );

export const unfollow = (followee_id) => dispatch => 
    FollowApiUtil.unfollow(followee_id).then((follow) => 
        dispatch(removeFollow(follow))
    );



