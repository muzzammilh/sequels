import {ActionType} from '../Contants/action-type';

const inisialState = {
  trendings: {
    page: 1,
    results: null,
    total_pages: 0,
    total_results: 0,
  },
};
export const trendingReducer = (state = inisialState, action) => {
  switch (action.type) {
    case ActionType.GETTRENDINGS:
      return {
        ...state, trendings: action.payload,
      };
    default:
      return state;
  }
};
