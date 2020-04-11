import { connect } from "react-redux";
import PostIndex from "./post_index";
import { fetchAllPosts, deletePost } from "../../actions/post_actions";


const mapStateToProps = (state) => {
  debugger;
    return {
        posts: Object.values(state.entities.posts),
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id]
    };
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    deletePost: (postId) => dispatch(deletePost(postId))
  }; 
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
