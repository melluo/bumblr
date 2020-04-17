import { connect } from "react-redux";
import SearchResult from "./searchresult";
import { openModal } from "../../../actions/modal_actions";

const mapStateToProps = (state) => {
    return {
        users: state.ui.modal.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: (modal) => dispatch((openModal(modal)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);