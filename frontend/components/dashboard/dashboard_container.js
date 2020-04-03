import { connect } from "react-redux";
import Dashboard from "./dashboard";
import { fetchAllPosts } from "../../actions/post_actions";
const mapStateToProps = (state) => {
    return{
        posts: Object.values(state.entities.posts),
        currentUser: state.entities.users[state.session.id]
    };
}

const mapDispatchToProps = (dispatch) => ({
    fetchAllPosts: () => dispatch(fetchAllPosts()),
})
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);