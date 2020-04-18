import { connect } from "react-redux";
import SearchResult from "./searchresult";
import { openModal, closeModal } from "../../../actions/modal_actions";
import { follow, unfollow } from "../../../actions/follow_actions";


const mapStateToProps = (state) => {
    const currentUser = state.entities.users[state.session.id];
    return {
        currentUser: currentUser,
        users: state.ui.modal.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        follow: (followee_id) => dispatch(follow(followee_id)),
        unfollow: (followee_id) => dispatch(unfollow(followee_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);