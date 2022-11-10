import { combineReducers } from 'redux';
import auth from './auth';
import food from './food';

export default combineReducers({
    auth,
    food,
});
