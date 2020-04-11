import { connect } from "react-redux";
import Dashboard from "./dashboard";
import { fetchAllPosts } from "../../actions/post_actions";
import { fetchAllUsers } from "../../actions/user_actions";

const mapStateToProps = (state) => {
    return{
        posts: Object.values(state.entities.posts),
        currentUser: state.entities.users[state.session.id]
    };
}

const mapDispatchToProps = (dispatch) => ({
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchAllPosts: () => dispatch(fetchAllPosts())
})
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);