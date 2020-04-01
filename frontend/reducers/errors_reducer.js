import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';

const errorsReducer = combineReducers({
    sesssion: sessionErrorsReducer
})

export default errorsReducer;
