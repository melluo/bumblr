import { connect } from "react-redux";
import { fetchPost, updatePost } from "../../actions/post_actions";
import EditTextForm from "./edit_text_form";

const mapStateToProps = (state, ownProps) => {
    return({
        postId: ownProps.match.params.postId,
        post: state.entities.posts[ownProps.match.params.postId],
        currentUser: state.entities.users[state.sesssion.id],
        FormType: "Save"
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        fetchPost: (postId) => dispatch(fetchPost(postId)),
        updatePost: (post) => dispatch(updatePost(post))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTextForm);