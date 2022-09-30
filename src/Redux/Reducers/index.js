import {combineReducers} from 'redux';
import {themeReducer} from './theme';
import {counterReducer} from './counter';
import {moviesReducer} from './movies';
import {overlayReducer} from './overlay';
import {peopleReducer} from './people';
import {trendingReducer} from './trending';
import {tvShowsReducer} from './tvShows';
const reducer = {
  counter: counterReducer,
  movies: moviesReducer,
  tvshows: tvShowsReducer,
  trendings: trendingReducer,
  overlay: overlayReducer,
  people: peopleReducer,
  theme: themeReducer,
};

export default combineReducers(reducer);
