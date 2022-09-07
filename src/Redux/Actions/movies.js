import {ActionType} from '../Contants/action-type';
import moviesData from '../../data/moviesData.json';
export const getallmovies = () => (dispatch) => {
  const data = moviesData;
  dispatch({
    type: ActionType.GETALLMOVIES,
    payload: data,
  });
};

