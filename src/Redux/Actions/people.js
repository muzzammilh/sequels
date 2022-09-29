import {ActionType} from '../Contants/action-type';
import api from '../../Api/config';
export const getpoppeople = () => async (dispatch) => {
  try {
    const response = await api.get('/person/popular' + '?api_key=' +
    process.env.REACT_APP_TMDB_API_KEY);
    if (response.data) {
      dispatch({
        type: ActionType.GETPOPPEOPLE,
        payload: response.data,
      });
    } else {
      console.log('streammovies Error >>', response);
    }
  } catch (error) {
    console.log('streammovies Error >>', error);
  }
};

// get the person details from TMDB API
export const getpopularpeople = (page) => async (dispatch) => {
  try {
    [...Array(2)].map(async (item, index) => {
      const response = await api.get('/person/popular',
          {
            params: {
              api_key: process.env.REACT_APP_TMDB_API_KEY,
              page: page + index + 1,
            },
          });
      if (response.data) {
        dispatch({
          type: ActionType.GETPOPULARPEOPLE,
          payload: response.data,
        });
      } else {
        console.log('latestmovies Error >>', response);
      }
  });
  } catch (error) {
    console.log('latestmovies Error >>', error);
  }
};

export const getpeopledetails = (id) => async (dispatch) => {
  try {
    const response = await api.get(`/person/${id}`,
        {
          params: {
            api_key: process.env.REACT_APP_TMDB_API_KEY,
          },
        });
    if (response.data) {
      dispatch({
        type: ActionType.GETPERSONDETAILS,
        payload: response.data,
      });
    } else {
      console.log('streammovies Error >>', response);
    }
  } catch (error) {
    console.log('streammovies Error >>', error);
  }
};
export const getpeopleexternalids = (id) => async (dispatch) => {
  try {
    const response = await api.get(`/person/${id}/external_ids`,
        {
          params: {
            api_key: process.env.REACT_APP_TMDB_API_KEY,
          },
        });
    if (response.data) {
      dispatch({
        type: ActionType.GETPERSONEXTERNALIDS,
        payload: response.data,
      });
    } else {
      console.log('streammovies Error >>', response);
    }
  } catch (error) {
    console.log('streammovies Error >>', error);
  }
};

export const clearpeopledetails = () => (dispatch) => {
  dispatch({
    type: ActionType.CLEARPERSONDETAILS,
  });
};

export const getpeoplecombinedcredits = (id) => async (dispatch) => {
  try {
    const response = await api.get(`/person/${id}/combined_credits`,
        {
          params: {
            api_key: process.env.REACT_APP_TMDB_API_KEY,
          },
        });
    if (response.data) {
      dispatch({
        type: ActionType.GETPERSONCREDITS,
        payload: response.data,
      });
    } else {
      console.log('streammovies Error >>', response);
    }
  } catch (error) {
    console.log('streammovies Error >>', error);
  }
};
