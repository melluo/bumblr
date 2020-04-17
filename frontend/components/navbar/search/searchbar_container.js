import { connect } from "react-redux";
import SearchBar from "./searchbar";
import { fetchAllUsers } from "../../../actions/user_actions";
import { closeModal, openModal } from "../../../actions/modal_actions";

const mapStateToProps = (state) => {
    return {
        users: Object.values(state.entities.users)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllUsers: () => dispatch((fetchAllUsers())),
        closeModal: () => dispatch(closeModal()),
        openModal: (modal, post, users) => dispatch((openModal(modal, post, users)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);