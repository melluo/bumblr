import { connect } from "react-redux";
import { fetchAllPosts } from "../../actions/post_actions";
import Splash from "./splash";

const mapStateToProps = (state) => {
    return {
        posts: Object.values(state.entities.posts)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllPosts: () => dispatch(fetchAllPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);