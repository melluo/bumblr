import { connect } from "react-redux";
import { fetchPost, updateImage } from "../../../actions/post_actions";
import { closeModal } from "../../../actions/modal_actions";
import EditPhotoForm from "./edit_photo_form";

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
        processPost: (formData, postId) => dispatch(updateImage(formData, postId)),
        closeModal: () => dispatch(closeModal())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPhotoForm);