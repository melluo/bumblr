import { connect } from "react-redux";
import { createPost } from "../../../actions/post_actions";
import QuoteForm from "./quote_form";
import { closeModal } from "../../../actions/modal_actions";

const mapStateToProps = ({entities, session}) => {
    const currentUserId = session.id;
    return({
        post: {
            title: "",
            body: "",
            tags: "",
            post_type: "quote",
            user_id: currentUserId
        },
        currentUser: entities.users[session.id],
        formType: "Post"
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        processPost: (post) => dispatch(createPost(post)),
        closeModal: () => dispatch(closeModal())       
    });
}

export default connect(mapStateToProps,mapDispatchToProps)(QuoteForm);