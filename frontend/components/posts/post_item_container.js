import { connect } from "react-redux";
import PostItem from "./post_item";
import { openModal } from "../../actions/modal_actions";
import { follow, unfollow } from "../../actions/follow_actions";
import { like, unlike } from "../../actions/like_actions";


const mapStateToProps = (state, ownProps) => {
    const currentUser = state.entities.users[state.session.id];
    const posts = state.entities.posts;
    const post = ownProps.post;
    const reblogs = Object.values(state.entities.posts).filter((post) => (
        post.reblogged_post_id === ownProps.post.id
    ))
    return({
        posts: posts,
        post: post,
        originalPost: posts[post.reblogged_post_id],
        author: ownProps.authoringUser,
        currentUser: currentUser,
        reblogs: reblogs,
        following: currentUser.following.includes(ownProps.authoringUser.id),
        liked: currentUser.likes.includes(ownProps.post.id), 
        likers: ownProps.post.likers,
        users: ownProps.users
    })
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return({
        deletePost: ownProps.deletePost, 
        like: (post_id, user_id) => dispatch(like(post_id, user_id)),
        unlike: (id) => dispatch(unlike(id)),
        follow: (followee_id) => dispatch(follow(followee_id)),
        unfollow: (followee_id) => dispatch(unfollow(followee_id)),
        openModal: (modal, post) => dispatch(openModal(modal, post))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);