import React from "react";
import PhotoForm from "./photo_form";

class EditPhotoForm extends React.Component{
    constructor(props){
        super(props);
    };

    componentDidMount(){
        this.props.fetchPost(this.props.post.id);
    };
    render() {
        return (
            <PhotoForm
                post = {this.props.post}
                posts = {this.props.posts}
                formType = {this.props.formType}
                currentUser = {this.props.currentUser}
                processPost = {this.props.processPost}
                closeModal = {this.props.closeModal}
            />
        )
    }

}

export default EditPhotoForm;