import {ActionType} from '../Contants/action-type';

const inisialState = {
  popularPeople: {
    page: 1,
    results: null,
    total_pages: 0,
    total_results: 0,
  },
};
export const peopleReducer = (state = inisialState, action) => {
  switch (action.type) {
    case ActionType.GETPOPULARPEOPLE:
      return {
        ...state, popularPeople: action.payload,
      };
    default:
      return state;
  }
};
