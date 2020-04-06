import { connect } from "react-redux";
import PostIndex from "./post_index";
import { fetchAllPosts, deletePost } from "../../actions/post_actions";


const mapStateToProps = (state) => {
    return {
        posts: Object.values(state.entities.posts),
        users: state.entities.users,
        currentUser: state.session.currentUser
    };
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    deletePost: (postId) => dispatch(deletePost(postId))
  }; 
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
