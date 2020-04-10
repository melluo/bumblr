import * as FollowApiUtil from "../util/follow_api_util";

export const RECEIVE_FOLLOWERS = "RECIEVE_FOLLOWERS";
export const RECEIVE_FOLLOW = "RECIEVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

const recieveFollowers = (followers) => {
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

export const fetchFollowers = () => dispatch => 
    FollowApiUtil.fetchFollowers().then((followers) => 
        dispatch(recieveFollowers(followers))
    );

export const follow = (followerId) => dispatch => 
    FollowApiUtil.follow(followerId).then((follow) =>
        dispatch(recieveFollow(follow))
    );

export const unfollow = (followeeId) => dispatch => 
    FollowApiUtil.unfollow(followeeId).then((follow) => 
        dispatch(removeFollow(follow))
    );




