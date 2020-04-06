import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import NewTextPost from "../posts/post_forms/new_text_form_container";
import EditTextPost from "../posts/post_forms/edit_text_container";

const Modal = ({modal}) => {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.modal) {
    case "Text Post":
        component = <NewTextPost />;
        break;
    case "Edit Text Post":
        component = <EditTextPost />;
        break;
    default:
        return null;
  }
  return (
    <div className="modal-background">
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
