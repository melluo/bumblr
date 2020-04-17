import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const modalReducer = (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
    case OPEN_MODAL:
      return {modal: action.modal, post: action.post, users: action.users};
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
};

export default modalReducer;