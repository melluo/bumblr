import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveAllUsers = (users) => {
    return {
        type: RECEIVE_ALL_USERS,
        users
    }
}

const receiveUser = (user) => {
    return {
        type: RECEIVE_USER,
        user
    }
}

export const fetchAllUsers = () => dispatch => {
    return UserAPIUtil.fetchAllUsers().then( (users) => {
        return dispatch(receiveAllUsers(users))
    });
}

export const fetchUser = (id) => dispatch => {
    return UserAPIUtil.fetchUser(id).then( (user) => {
        return dispatch(receiveUser(user))
    });
}
