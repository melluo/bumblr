import { connect } from 'react-redux';
import PostNavBar from './posts_navbar';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostNavBar);