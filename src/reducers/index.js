import { combineReducers } from 'redux';
import inputReducer from './inputReducer';
import userReducer from './userReducer';

export default combineReducers({
    input: inputReducer,
    user: userReducer
});