import {combineReducers} from 'redux';
import {counterReducer} from './counter';
import {moviesReducer} from './movies';
const reducer = {
  counter: counterReducer,
  movies: moviesReducer,
};

export default combineReducers(reducer);
