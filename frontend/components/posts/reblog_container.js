import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import { createPost } from "../../actions/post_actions";
import Reblog from "./reblog";

const mapStateToProps = (state) => {
    const originalPost = state.ui.modal.post;
    const currentUser = state.entities.users[state.session.id];
    debugger;
    return({
        posts: state.entities.posts,
        originalPost: originalPost,
        rebloggedPost: {
            title: originalPost.title, 
            body: originalPost.body, 
            post_type: originalPost.post_type, 
            imageUrl: originalPost.imageUrl, 
            author_id: currentUser.id, 
            reblogged_post_id: originalPost.id, 
            reblog_body: "", 
            reblog_tags: ""
        },
        currentUser: currentUser,
        formType: "Reblog"
    });
}

const mapDispatchToProps = (dispatch) => {
    return({
    processPost: (post) => dispatch(createPost(post)),
    closeModal: () => dispatch(closeModal())
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(Reblog);