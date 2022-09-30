import {ActionType} from '../Contants/action-type';

const inisialState = {
    colors: {
        primary: '#032541',
        primaryconst: '#032541',
        primaryLight: '#EFF3FE',
        secondary: '#03b3e4',
        secondaryLight: '#90cfa2',
        black: '#000000',
        white: '#ffffff',
        gray: '#767676',
        grayDark: '#D0D0D0',
        star: '#ffd700',
        seagreenPrimay: '#20d5a9',
        seagreenSecondary: '#bdfdcf',
        redPrimary: '#d93b62',
        redSecondary: '#fdc271',
      },
      mode: 'light',
};
export const themeReducer = (state = inisialState, action) => {
  switch (action.type) {
    case ActionType.THEMEDARK:
      return {
        ...state,
        colors: {
          ...state.colors, primary: '#FFFFFF',
          primaryLight: '#393939',
          white: '#171717',
        },
        mode: 'dark',
      };
    case ActionType.THEMELIGHT:
      return {
        ...state,
        colors: {
          ...state.colors, primary: '#032541',
          primaryLight: '#EFF3FE',
          white: '#ffffff',
        },
        mode: 'light',
      };
    default:
      return state;
  }
};
