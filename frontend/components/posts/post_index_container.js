import { connect } from "react-redux";
import PostIndex from "./post_index";
import { fetchPosts, deletePost } from "../../actions/post_actions";


const mapStateToProps = (state) => {
    return ({
        posts: Object.values(state.entities.posts),
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id]
    })
}
const mapDispatchToProps = (dispatch) => {
  return({
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: (postId) => dispatch(deletePost(postId))
  }) 
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);