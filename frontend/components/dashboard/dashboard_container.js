import { connect } from "react-redux";
import Dashboard from "./dashboard";
import { fetchAllPosts } from "../../actions/post_actions";
import { fetchAllUsers } from "../../actions/user_actions";
import { follow } from "../../actions/follow_actions";
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return{
        posts: Object.values(state.entities.posts),
        currentUser: state.entities.users[state.session.id],
        users: Object.values(state.entities.users)
    };
}

const mapDispatchToProps = (dispatch) => ({
    follow: (followee_id) => dispatch(follow(followee_id)),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    openModal: (modal) => dispatch(openModal(modal))
})
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);