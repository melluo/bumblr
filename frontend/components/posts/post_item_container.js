import { connect } from "react-redux";
import PostItem from "./post_item";
import { openModal } from "../../actions/modal_actions";


const mapStateToProps = (state, ownProps) => {
    debugger;
    return({
        post: ownProps.post,
        author: ownProps.authoringUser,
        currentUser: state.entities.users[state.session.id]
    })
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return({
        deletePost: ownProps.deletePost, 
        openModal: (modal, post) => dispatch(openModal(modal, post))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);