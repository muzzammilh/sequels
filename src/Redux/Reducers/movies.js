import {ActionType} from '../Contants/action-type';

const inisialState = {
  allmovies: null,
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
};
export const moviesReducer = (state = inisialState, action) => {
  switch (action.type) {
    case ActionType.GETALLMOVIES:
      return {
        ...state, allmovies: action.payload,
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
