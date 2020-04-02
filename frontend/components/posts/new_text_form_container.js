import { connect } from "react-redux";
import { createPost } from "../../actions/post_actions";
import TextForm from "./text_form";

const mapStateToProps = (state) => {
    return({
        currentUser: state.entities.users[state.session.id];
        formType: "Create Post",
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        createPost: (post) => dispatch(createPost(post)),
        closeModal: () => dispatch(closeModal())       
    });
}

export default connect(mapStateToProps,mapDispatchToProps)(TextForm);