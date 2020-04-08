import React from "react";
import QuoteForm from "./quote_form";

class EditQuoteForm extends React.Component{
    constructor(props){
        super(props);
    };

    componentDidMount(){
        this.props.fetchPost(this.props.post.id);
    };
    render() {
        return (
            <QuoteForm
                post = {this.props.post}
                formType = {this.props.formType}
                currentUser = {this.props.currentUser}
                processPost = {this.props.processPost}
                closeModal = {this.props.closeModal}
            />
        )
    }

}

export default EditQuoteForm;