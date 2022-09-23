import {ActionType} from '../Contants/action-type';

const inisialState = {
  allmovies: null,
  popularmovies: {
    page: 1,
    results: null,
    total_pages: 0,
    total_results: 0,
  },
  forrentmovies: {
    page: 1,
    results: null,
    total_pages: 0,
    total_results: 0,
  },
  ontheatermovies: {
    page: 1,
    results: null,
    total_pages: 0,
    total_results: 0,
  },
  topRatedmovies: {
    page: 1,
    results: null,
    total_pages: 0,
    total_results: 0,
  },
  upcomingmovies: {
    page: 1,
    results: null,
    total_pages: 0,
    total_results: 0,
  },
  moviesbydate: {
    page: 1,
    results: null,
    total_pages: 0,
    total_results: 0,
  },
  latestmovie: null,
};
export const moviesReducer = (state = inisialState, action) => {
  switch (action.type) {
    case ActionType.GETALLMOVIES:
      return {
        ...state, allmovies: action.payload,
      };
    case ActionType.GETSTREEMINGMOVIES:
      return {
        ...state, popularmovies: action.payload,
      };
    case ActionType.GETFORRENTMOVIES:
      return {
        ...state, forrentmovies: action.payload,
      };
    case ActionType.GETINTHEATREMOVIES:
      return {
        ...state, ontheatermovies: action.payload,
      };
    case ActionType.GETMOVIESBYDATE:
      console.log('action.payload', action.payload);
      return {
        ...state, moviesbydate: action.payload,
      };
    case ActionType.GETUPCOMINGMOVIES:
      console.log('action.payload', action.payload);
      return {
        ...state, upcomingmovies: action.payload,
      };
    case ActionType.GETLATESTMOVIE:
      console.log('action.payload', action.payload);
      return {
        ...state, latestmovie: action.payload,
      };
    default:
      return state;
  }
};
