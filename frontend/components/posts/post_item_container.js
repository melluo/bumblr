import { connect } from "react-redux";
import PostItem from "./post_item";
import { openModal } from "../../actions/modal_actions";
import { follow, unfollow } from "../../actions/follow_actions";


const mapStateToProps = (state, ownProps) => {
    const currentUser = state.entities.users[state.session.id];
    return({
        post: ownProps.post,
        author: ownProps.authoringUser,
        currentUser: currentUser,
        following: currentUser.following.includes(ownProps.authoringUser.id),
        users: ownProps.users
    })
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return({
        deletePost: ownProps.deletePost, 
        follow: (followee_id) => dispatch(follow(followee_id)),
        unfollow: (followee_id) => dispatch(unfollow(followee_id)),
        openModal: (modal, post) => dispatch(openModal(modal, post))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);