import {ActionType} from '../Contants/action-type';

const inisialState = {
  popularPeople: {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  personDetails: null,
  personCredits: null,
  personExternalIds: null,
};
export const peopleReducer = (state = inisialState, action) => {
  switch (action.type) {
    case ActionType.GETPOPPEOPLE:
      return {
        ...state, popularPeople: action.payload,
      };
    case ActionType.GETPOPULARPEOPLE:
    return {
      ...state, popularPeople: {
        page: action.payload.page,
        results: [...state.popularPeople.results, ...action.payload.results],
        total_pages: action.payload.total_pages,
        total_results: action.payload.total_results,
      },
    };
    case ActionType.GETPERSONDETAILS:
      return {
        ...state, personDetails: action.payload,
      };
    case ActionType.GETPERSONCREDITS:
      return {
        ...state, personCredits: action.payload,
      };
    case ActionType.GETPERSONEXTERNALIDS:
      return {
        ...state, personExternalIds: action.payload,
      };
    case ActionType.CLEARPERSONDETAILS:
      return {
        ...state, personDetails: null, personCredits: null,
      };
    default:
      return state;
  }
};
