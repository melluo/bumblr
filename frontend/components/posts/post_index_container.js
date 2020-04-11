import { connect } from "react-redux";
import PostIndex from "./post_index";
import { fetchAllPosts, deletePost } from "../../actions/post_actions";
import { fetchAllUsers } from "../../actions/user_actions";

const mapStateToProps = (state) => {
    return {
        posts: Object.values(state.entities.posts),
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id]
    };
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    deletePost: (postId) => dispatch(deletePost(postId))
  }; 
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
