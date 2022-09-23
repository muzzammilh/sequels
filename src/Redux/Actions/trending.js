import {ActionType} from '../Contants/action-type';
import api from '../../Api/config';
export const gettrendings = () => async (dispatch) => {
  try {
    const response = await api.get('/trending/all/day', {
      params: {
        api_key: process.env.REACT_APP_TMDB_API_KEY,
      },
    });
    if (response.data) {
      dispatch({
        type: ActionType.GETTRENDINGS,
        payload: response.data,
      });
    } else {
      console.log('streammovies Error >>', response);
    }
  } catch (error) {
    console.log('streammovies Error >>', error);
  }
};
