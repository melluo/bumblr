import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import postsReducer from "./posts_reducer";

const EntitiesReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer
});

export default EntitiesReducer;