import {ActionType} from '../Contants/action-type';

const inisialState = {
  popularTvShows: {
    page: 1,
    results: null,
    total_pages: 0,
    total_results: 0,
  },
};
export const tvShowsReducer = (state = inisialState, action) => {
  switch (action.type) {
    case ActionType.GETSTREEMINGTVSHOWS:
      return {
        ...state, popularTvShows: action.payload,
      };
    default:
      return state;
  }
};
