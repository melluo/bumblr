import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';



document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser){
        //a preloaded state of key of users and the id of currentUser is set to the bootstraped current user and sessions nested under entities 
        const preloadedState = {
            entities: {
            users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else{
        store = configureStore();
    }

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>,root);
    //replace the root id with the react root component
})