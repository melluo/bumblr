import React from "react";
import TextForm from "./text_form";

class EditTextForm extends React.Component{
    constructor(props){
        super(props);
    };

    componentDidMount(){
        this.props.fetchPost(this.props.postId);
    }
    render() {
        return (
            <TextForm
                post = {this.props.post}
                formType = {this.props.formType}
                createPost = {this.props.updatePost}
            />
        )
    }

}

export default EditTextForm;