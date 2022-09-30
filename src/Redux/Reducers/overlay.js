import {ActionType} from '../Contants/action-type';

const inisialState = {
  overlay: false,
  url: '',
};
export const overlayReducer = (state = inisialState, action) => {
  switch (action.type) {
    case ActionType.SHOWOVERLAY:
      return action.payload;
    case ActionType.HIDEOVERLAY:
      return action.payload;
    default:
      return state;
  }
};
