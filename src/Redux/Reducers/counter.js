import {ActionType} from '../Contants/action-type';

const inisialState = {
  count: 0,
};
export const counterReducer = (state = inisialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case ActionType.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
