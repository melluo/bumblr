import { connect } from "react-redux";
import Likes from "./likes";
import { unlike } from "../../actions/like_actions";
import { fetchAllUsers } from "../../actions/user_actions";
import { fetchAllPosts } from "../../actions/post_actions"
import { deletePost } from "../../actions/post_actions";

const mapStateToProps = (state) => {
    const currentUser = state.entities.users[state.session.id];
    return{
        currentUser: currentUser,
        users: Object.values(state.entities.users),
        posts: state.entities.posts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        unlike: (id) => dispatch(unlike(id)),
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        fetchAllPosts: () => dispatch(fetchAllPosts()),
        deletePost: (postId) => dispatch(deletePost(postId))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
