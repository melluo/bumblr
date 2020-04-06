import React from "react";
import TextForm from "./text_form";

class EditTextForm extends React.Component{
    constructor(props){
        super(props);
    };

    componentDidMount(){
        this.props.fetchPost(this.props.post.id);
    };
    render() {
        return (
            <TextForm
                post = {this.props.post}
                formType = {this.props.formType}
                currentUser = {this.props.currentUser}
                processPost = {this.props.processPost}
                closeModal = {this.props.closeModal}
            />
        )
    }

}

export default EditTextForm;