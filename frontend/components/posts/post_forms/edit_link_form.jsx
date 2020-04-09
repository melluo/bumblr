import React from "react";
import LinkForm from "./link_form";

class EditLinkForm extends React.Component{
    constructor(props){
        super(props);
    };

    componentDidMount(){
        this.props.fetchPost(this.props.post.id);
    };
    render() {
        return (
            <LinkForm
                post = {this.props.post}
                formType = {this.props.formType}
                currentUser = {this.props.currentUser}
                processPost = {this.props.processPost}
                closeModal = {this.props.closeModal}
            />
        )
    }

}

export default EditLinkForm;