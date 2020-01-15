// import {combineReducers} from 'redux'
import {combineReducers} from 'redux-immutable';
import listReducer from '../../home/redux/reducer';

const rootReducer = combineReducers({
    list: listReducer,
});

export default rootReducer;