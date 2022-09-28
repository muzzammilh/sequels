import api from '../../Api/config';
import {ActionType} from '../Contants/action-type';
export const showOverlay = (id, url) => async (dispatch) => {
  if (url) {
    dispatch({
      type: ActionType.SHOWOVERLAY,
      payload: {
        overlay: true,
        url: url,
      },
    });
  } else {
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
            url: process.env.REACT_APP_YOUTUBE_LINK+
            response.data.results[0].key,
          },
        });
      } else {
        console.log('streammovies Error >>', response);
      }
    } catch (error) {
      console.log('error overlay :>> ', error);
    }
  }
};
export const tvShowOverlay = (id, url) => async (dispatch) => {
  if (url) {
    dispatch({
      type: ActionType.SHOWOVERLAY,
      payload: {
        overlay: true,
        url: url,
      },
    });
  } else {
    try {
      const response = await api.get(`/tv/${id}/videos`,
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
            url: process.env.REACT_APP_YOUTUBE_LINK+
            response.data.results[0].key,
          },
        });
      } else {
        console.log('streammovies Error >>', response);
      }
    } catch (error) {
      console.log('error overlay :>> ', error);
    }
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
