import { connect } from "react-redux";
import { fetchAllUsers } from "../../actions/user_actions";
import { unfollow } from "../../actions/follow_actions";
import { openModal } from '../../actions/modal_actions';
import Following from "./following";

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        users: Object.values(state.entities.users)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        unfollow: (followee_id) => dispatch(unfollow(followee_id)),
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Following);