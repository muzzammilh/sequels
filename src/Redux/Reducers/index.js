import {combineReducers} from 'redux';
import {counterReducer} from './counter';
const reducer = {
  counter: counterReducer,
};

export default combineReducers(reducer);
