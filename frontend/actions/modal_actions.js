export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (modal, post, users) => {
    return {
        type: OPEN_MODAL,
        modal,
        post,
        users
    }
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL,
    }
};