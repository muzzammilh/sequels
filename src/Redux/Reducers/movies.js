import {ActionType} from '../Contants/action-type';

const inisialState = {
  popularmovies: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  nowplayingmovies: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  upcomingmovies: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  topratedmovies: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  streamedmovies: {
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
  upcomingtrailers: {
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
  moviedetails: null,
  moviecredits: null,
  movievideos: null,
  moviereviews: null,
  movieexternalids: null,
  moviekeywords: null,
  movieimages: null,
  movievideos: null,
  movierecommendations: null,
};
export const moviesReducer = (state = inisialState, action) => {
  switch (action.type) {
    case ActionType.GETMOVIEDETAILS:
      return {
        ...state, moviedetails: action.payload,
      };
    case ActionType.GETMOVIECREDITS:
      return {
        ...state, moviecredits: action.payload,
      };
    case ActionType.GETMOVIEREVIEWS:
      return {
        ...state, moviereviews: action.payload,
      };
    case ActionType.GETMOVIEKEYWORDS:
      return {
        ...state, moviekeywords: action.payload,
      };
    case ActionType.GETEXTERNALLINKS:
      return {
        ...state, movieexternalids: action.payload,
      };
    case ActionType.GETMOVIEIMAGES:
      return {
        ...state, movieimages: action.payload,
      };
    case ActionType.GETMOVIEVIDEOS:
      return {
        ...state, movievideos: action.payload,
      };
    case ActionType.GETMOVIERECOMMENDATIONS:
      return {
        ...state, movierecommendations: action.payload,
      };
    case ActionType.CLEARMOVIEDETAILS:
      return {
        ...state, moviedetails: null, moviecredits: null, movievideos: null,
        moviereviews: null, movieexternalids: null, moviekeywords: null,
        movieimages: null, movievideos: null, movierecommendations: null,
      };
    case ActionType.GETSTREEMINGMOVIES:
      return {
        ...state, streamedmovies: action.payload,
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
      return {
        ...state, moviesbydate: action.payload,
      };
    case ActionType.GETUPCOMINGTRAILERS:
      return {
        ...state, upcomingtrailers: action.payload,
      };
    case ActionType.GETLATESTMOVIE:
      return {
        ...state, latestmovie: action.payload,
      };
    case ActionType.GETPOPULARMOVIES:
      return {
        ...state, popularmovies: {
          page: action.payload.page,
          results: [...state.popularmovies.results, ...action.payload.results],
          total_pages: action.payload.total_pages,
          total_results: action.payload.total_results,
        },
      };
    case ActionType.GETNOWPLAYINGMOVIES:
      return {
        ...state, nowplayingmovies: {
          page: action.payload.page,
          results: [...state.nowplayingmovies.results,
            ...action.payload.results],
          total_pages: action.payload.total_pages,
          total_results: action.payload.total_results,
        },
      };
    case ActionType.GETUPCOMINGMOVIES:
      return {
        ...state, upcomingmovies: {
          page: action.payload.page,
          results: [...state.upcomingmovies.results,
            ...action.payload.results],
          total_pages: action.payload.total_pages,
          total_results: action.payload.total_results,
        },
      };
    case ActionType.GETTOPRATEDMOVIES:
      return {
        ...state, topratedmovies: {
          page: action.payload.page,
          results: [...state.topratedmovies.results,
            ...action.payload.results],
          total_pages: action.payload.total_pages,
          total_results: action.payload.total_results,
        },
      };
    default:
      return state;
  }
};
