import api from '../../Api/config';
import {ActionType} from '../Contants/action-type';
export const showOverlay = (id) => async (dispatch) => {
  try {
    const response = await api.get(`/movie/${id}/videos`,
        {
          params: {
            api_key: process.env.REACT_APP_TMDB_API_KEY,
            language: 'en-US',
            append_to_response: 'videos',
          },
        });
    if (response.data) {
      dispatch({
        type: ActionType.SHOWOVERLAY,
        payload: {
          overlay: true,
          url: 'https://www.youtube.com/embed/' + response.data.results[0].key,
        },
      });
    } else {
      console.log('streammovies Error >>', response);
    }
  } catch (error) {
    console.log('error overlay :>> ', error);
  }
};
export const hideOverlay = () => async (dispatch) => {
  dispatch({
    type: ActionType.HIDEOVERLAY,
    payload: {
      overlay: false,
      url: '',
    },
  });
};
