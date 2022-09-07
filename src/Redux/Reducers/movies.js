import {ActionType} from '../Contants/action-type';

const inisialState = {
  allmovies: null,
};
export const moviesReducer = (state = inisialState, action) => {
  switch (action.type) {
    case ActionType.GETALLMOVIES:
      return {
        ...state, allmovies: action.payload,
      };
    case ActionType.GETSTREEMINGMOVIES:
      return {
        ...state, allmovies: action.payload,
      };
    case ActionType.GETONRENTMOVIES:
      return {
        ...state, allmovies: action.payload,
      };
    case ActionType.GETFORRENTMOVIES:
      return {
        ...state, allmovies: action.payload,
      };
    case ActionType.GETINTHEATREMOVIES:
      return {
        ...state, allmovies: action.payload,
      };
    default:
      return state;
  }
};
