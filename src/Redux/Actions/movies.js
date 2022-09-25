import {ActionType} from '../Contants/action-type';
import moviesData from '../../data/moviesData.json';
import api from '../../Api/config';
import moment from 'moment';
export const getallmovies = () => (dispatch) => {
  const data = moviesData;
  dispatch({
    type: ActionType.GETALLMOVIES,
    payload: data,
  });
};
export const getstreemingmovies = () => async (dispatch) => {
  try {
    const response = await api.get('/movie/popular',
        {
          params: {
            api_key: process.env.REACT_APP_TMDB_API_KEY,
            page: 1,
          },
        });
    if (response.data) {
      dispatch({
        type: ActionType.GETSTREEMINGMOVIES,
        payload: response.data,
      });
    } else {
      console.log('streammovies Error >>', response);
    }
  } catch (error) {
    console.log('streammovies Error >>', error);
  }
};
export const getforrentmovies = () => async (dispatch) => {
  try {
    const response = await api.get('/discover/movie',
        {
          params: {
            api_key: process.env.REACT_APP_TMDB_API_KEY,
            language: 'en-US',
            sort_by: 'popularity.dec',
            include_adult: false,
            page: 1,
            with_watch_monetization_types: 'rent',
          },
        });
    if (response.data) {
      dispatch({
        type: ActionType.GETFORRENTMOVIES,
        payload: response.data,
      });
    } else {
      console.log('streammovies Error >>', response);
    }
  } catch (error) {
    console.log('streammovies Error >>', error);
  }
};
export const getontheatermovies = () => async (dispatch) => {
  try {
    const response = await api.get('/movie/now_playing',
        {
          params: {
            api_key: process.env.REACT_APP_TMDB_API_KEY,
          },
        });
    if (response.data) {
      dispatch({
        type: ActionType.GETINTHEATREMOVIES,
        payload: response.data,
      });
    } else {
      console.log('streammovies Error >>', response);
    }
  } catch (error) {
    console.log('streammovies Error >>', error);
  }
};
export const getmoviesbydate = (date) => async (dispatch) => {
  try {
    const formatedDate = moment(date).format('YYYY-MM-DD');
    const response = await api.get('/discover/movie',
        {
          params: {
            'api_key': process.env.REACT_APP_TMDB_API_KEY,
            'language': 'en-US',
            'sort_by': 'popularity.asc',
            'release_date.lte': formatedDate,
            'release_date.gte': formatedDate,
            'year': moment(date).format('YYYY'),
          },
        });
    if (response.data) {
      dispatch({
        type: ActionType.GETMOVIESBYDATE,
        payload: response.data,
      });
    } else {
      console.log('streammovies Error >>', response);
    }
  } catch (error) {
    console.log('streammovies Error >>', error);
  }
};
export const getupcomingtrailers = () => async (dispatch) => {
  try {
    const response = await api.get('/movie/upcoming',
        {
          params: {
            'api_key': process.env.REACT_APP_TMDB_API_KEY,
          },
        });
    if (response.data) {
      dispatch({
        type: ActionType.GETUPCOMINGTRAILERS,
        payload: response.data,
      });
    } else {
      console.log('streammovies Error >>', response);
    }
  } catch (error) {
    console.log('streammovies Error >>', error);
  }
};
export const getlatestmovie = () => async (dispatch) => {
  try {
    const response = await api.get('/movie/latest',
        {
          params: {
            'api_key': process.env.REACT_APP_TMDB_API_KEY,
          },
        });
    if (response.data) {
      dispatch({
        type: ActionType.GETLATESTMOVIE,
        payload: response.data,
      });
    } else {
      console.log('latestmovies Error >>', response);
    }
  } catch (error) {
    console.log('latestmovies Error >>', error);
  }
};
export const getpopularmovie = (page) => async (dispatch) => {
  try {
    [...Array(2)].map(async (item, index) => {
      const response = await api.get('/movie/popular',
          {
            params: {
              api_key: process.env.REACT_APP_TMDB_API_KEY,
              page: page + index + 1,
            },
          });
      if (response.data) {
        dispatch({
          type: ActionType.GETPOPULARMOVIES,
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
export const getnowplayingmovies = (page) => async (dispatch) => {
  try {
    [...Array(2)].map(async (item, index) => {
      const response = await api.get('/movie/now_playing',
          {
            params: {
              api_key: process.env.REACT_APP_TMDB_API_KEY,
              page: page + index + 1,
            },
          });
      if (response.data) {
        dispatch({
          type: ActionType.GETNOWPLAYINGMOVIES,
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
export const getupcomingmovies = (page) => async (dispatch) => {
  try {
    [...Array(2)].map(async (item, index) => {
      const response = await api.get('/movie/upcoming',
          {
            params: {
              api_key: process.env.REACT_APP_TMDB_API_KEY,
              page: page + index + 1,
            },
          });
      if (response.data) {
        dispatch({
          type: ActionType.GETUPCOMINGMOVIES,
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
export const gettopratedmovies = (page) => async (dispatch) => {
  try {
    [...Array(2)].map(async (item, index) => {
      const response = await api.get('/movie/top_rated',
          {
            params: {
              api_key: process.env.REACT_APP_TMDB_API_KEY,
              page: page + index + 1,
            },
          });
      if (response.data) {
        dispatch({
          type: ActionType.GETTOPRATEDMOVIES,
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
