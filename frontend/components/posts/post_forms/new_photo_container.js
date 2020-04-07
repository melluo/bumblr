import { connect } from "react-redux";
import { createPhoto } from "../../../actions/post_actions";
import PhotoForm from "./photo_form";
import { closeModal } from "../../../actions/modal_actions";

const mapStateToProps = ({entities, session}) => {
    const currentUserId = session.id;
    return({
        post: {
            title: "",
            body: "",
            tags: "",
            post_type: "photo",
            user_id: currentUserId
        },
        currentUser: entities.users[session.id],
        formType: "Post"
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        processPost: (formData) => dispatch(createPhoto(formData)),
        closeModal: () => dispatch(closeModal())       
    });
}

export default connect(mapStateToProps,mapDispatchToProps)(PhotoForm);