import * as PostApiUtils from "../util/post_api_util";

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

export const receiveAllPosts = (posts) => ({
    type: RECEIVE_ALL_POSTS,
    posts
});

export const receivePost = (post) => ({
    type: RECEIVE_POST,
    post
});

export const removePost = (postId) => ({
    type: REMOVE_POST,
    postId
});

export const fetchAllPosts = () => (dispatch) => 
    PostApiUtils.fetchAllPosts().then((posts) => 
        dispatch(receiveAllPosts(posts))
    );

export const fetchPost = (postId) => (dispatch) =>
    PostApiUtils.fetchPost(postId).then((post) => 
        dispatch(receivePost(post))
    );

export const createPost = (post) => (dispatch) => 
    PostApiUtils.createPost(post).then((post) => 
        dispatch(receivePost(post))
    );

export const updatePost = (post) => (dispatch) => 
    PostApiUtils.updatePost(post).then((post) => 
        dispatch(receivePost(post))
    );

export const deletePost = (postId) => (dispatch) =>
    PostApiUtils.deletePost(postId).then (() =>
        dispatch(removePost(postId))
    );

export const createImage = (formData) => (dispatch) => 
    PostApiUtils.createImage(formData).then((post) => 
        dispatch(receivePost(post))
    );

export const updateImage = (formData, postId) => (dispatch) => 
    PostApiUtils.updateImage(formData, postId).then((post) => 
        dispatch(receivePost(post))
    );
