import { connect } from "react-redux";
import UserShow from "./user_show";
import { fetchAllPosts, deletePost } from "../../actions/post_actions";
import { fetchAllUsers } from "../../actions/user_actions";

const mapStateToProps = (state, ownProps) => {
    debugger;
    return{
        authorId: parseInt(ownProps.authorId),
        user: state.entities.users[ownProps.authorId],
        users: state.entities.users,
        posts: Object.values(state.entities.posts)
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchAllPosts: () => dispatch(fetchAllPosts()),
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        deletePost: (postId) => dispatch(deletePost(postId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);