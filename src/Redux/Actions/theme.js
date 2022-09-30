import {ActionType} from '../Contants/action-type';

export const themedark = () => (dispatch) => {
    dispatch({
      type: ActionType.THEMEDARK,
    });
};
export const themelight = () => (dispatch) => {
    dispatch({
      type: ActionType.THEMELIGHT,
    });
};
