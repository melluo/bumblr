import { connect } from "react-redux";
import { fetchPost, updatePost } from "../../../actions/post_actions";
import { closeModal } from "../../../actions/modal_actions";
import EditLinkForm from "./edit_link_form";

const mapStateToProps = (state) => {
    return({
        post: state.ui.modal.post,
        currentUser: state.entities.users[state.session.id],
        formType: "Save"
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        fetchPost: (postId) => dispatch(fetchPost(postId)),
        processPost: (post) => dispatch(updatePost(post)),
        closeModal: () => dispatch(closeModal())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(EditLinkForm);