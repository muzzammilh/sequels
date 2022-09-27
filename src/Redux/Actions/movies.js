import {ActionType} from '../Contants/action-type';
import api from '../../Api/config';
import moment from 'moment';

// Get the Stream Movies from TMDB API
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

// Get the For Rent Movie from TMDB API
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

// Get the Ontheater Movie from TMDB API
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

// Get the Movies by specific date from TMDB API
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

// Get the Upcoming movie Trailers from TMDB API
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

// Get the Latest Movie from TMDB API
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

// Get the Popular Movies for Movies-Page from TMDB API
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

// Get the Now Playing Movies for Movies-Page from TMDB API
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

// Get the Upcoming Movies for Movies-Page from TMDB API
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

// Get the Top Rated Movies for Movies-Page from TMDB API
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

// Get the Movie Details from TMDB API
export const getmoviedetails = (id) => async (dispatch) => {
  try {
    const response = await api.get(`/movie/${id}`,
        {
          params: {
            api_key: process.env.REACT_APP_TMDB_API_KEY,
          },
        });
    if (response.data) {
      dispatch({
        type: ActionType.GETMOVIEDETAILS,
        payload: response.data,
      });
    } else {
      console.log('streammovies Error >>', response);
    }
  } catch (error) {
    console.log('streammovies Error >>', error);
  }
};

// Get the Movie Credits from TMDB API
export const getmoviecredits = (id) => async (dispatch) => {
  try {
    const response = await api.get(`/movie/${id}/credits`,
        {
          params: {
            api_key: process.env.REACT_APP_TMDB_API_KEY,
          },
        });
    if (response.data) {
      dispatch({
        type: ActionType.GETMOVIECREDITS,
        payload: response.data,
      });
    } else {
      console.log('streammovies Error >>', response);
    }
  } catch (error) {
    console.log('streammovies Error >>', error);
  }
};

// Get the Movie Reviews from TMDB API
export const getmoviereviews = (id) => async (dispatch) => {
  try {
    const response = await api.get(`/movie/${id}/reviews`,
        {
          params: {
            api_key: process.env.REACT_APP_TMDB_API_KEY,
          },
        });
    if (response.data) {
      dispatch({
        type: ActionType.GETMOVIEREVIEWS,
        payload: response.data,
      });
    } else {
      console.log('streammovies Error >>', response);
    }
  } catch (error) {
    console.log('streammovies Error >>', error);
  }
};

// Get the Movie Keywords from TMDB API
export const getmoviekeywords = (id) => async (dispatch) => {
  try {
    const response = await api.get(`/movie/${id}/keywords`,
        {
          params: {
            api_key: process.env.REACT_APP_TMDB_API_KEY,
          },
        });
    if (response.data) {
      dispatch({
        type: ActionType.GETMOVIEKEYWORDS,
        payload: response.data,
      });
    } else {
      console.log('streammovies Error >>', response);
    }
  } catch (error) {
    console.log('streammovies Error >>', error);
  }
};

// Get the Movie External Link (like facebook-page, insta extra) from TMDB API
export const getexternallinks = (id) => async (dispatch) => {
  try {
    const response = await api.get(`/movie/${id}/external_ids`,
        {
          params: {
            api_key: process.env.REACT_APP_TMDB_API_KEY,
          },
        });
    if (response.data) {
      dispatch({
        type: ActionType.GETEXTERNALLINKS,
        payload: response.data,
      });
    } else {
      console.log('streammovies Error >>', response);
    }
  } catch (error) {
    console.log('streammovies Error >>', error);
  }
};

// Get the Movie Images & Videos from TMDB API
export const getmovieimagesandviedos = (id) => async (dispatch) => {
  try {
    const images = api.get(`/movie/${id}/images`,
        {
          params: {
            api_key: process.env.REACT_APP_TMDB_API_KEY,
          },
        });
    const videos = api.get(`/movie/${id}/videos`,
        {
          params: {
            api_key: process.env.REACT_APP_TMDB_API_KEY,
          },
        });
    const response = await Promise.all([images, videos]);
    if (response[0].data) {
      dispatch({
        type: ActionType.GETMOVIEIMAGES,
        payload: response[0].data,
      });
    } if (response[1].data) {
      dispatch({
        type: ActionType.GETMOVIEVIDEOS,
        payload: response[1].data,
      });
    } else {
      console.log('streammovies Error >>', response);
    }
  } catch (error) {
    console.log('streammovies Error >>', error);
  }
};

// Get the Movie Recommendations from TMDB API
export const getmovierecomendations = (id) => async (dispatch) => {
  try {
    const response = await api.get(`/movie/${id}/recommendations`,
        {
          params: {
            api_key: process.env.REACT_APP_TMDB_API_KEY,
          },
        });
    if (response.data) {
      dispatch({
        type: ActionType.GETMOVIERECOMMENDATIONS,
        payload: response.data,
      });
    } else {
      console.log('streammovies Error >>', response);
    }
  } catch (error) {
    console.log('streammovies Error >>', error);
  }
};
export const clearmoviedetails = () => (dispatch) => {
  dispatch({
    type: ActionType.CLEARMOVIEDETAILS,
  });
};

