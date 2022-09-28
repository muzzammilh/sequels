import {ActionType} from '../Contants/action-type';
import api from '../../Api/config';
export const getstreemingTvShows = () => async (dispatch) => {
  try {
    const response = await api.get('/tv/popular' + '?api_key=' +
    process.env.REACT_APP_TMDB_API_KEY);
    if (response.data) {
      dispatch({
        type: ActionType.GETSTREEMINGTVSHOWS,
        payload: response.data,
      });
    } else {
      console.log('streammovies Error >>', response);
    }
  } catch (error) {
    console.log('streammovies Error >>', error);
  }
};


// Get the Popular TV Shows for TV-Shows-Page from TMDB API
export const getpopulartvshows = (page) => async (dispatch) => {
  try {
    [...Array(2)].map(async (item, index) => {
      const response = await api.get('/tv/popular',
          {
            params: {
              api_key: process.env.REACT_APP_TMDB_API_KEY,
              page: page + index + 1,
            },
          });
      if (response.data) {
        dispatch({
          type: ActionType.GETPOPULARTVSHOWS,
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

// Get the Airing Today Tv Shows for TV-Shows-Page from TMDB API
export const getairingtodaytvshows = (page) => async (dispatch) => {
  try {
    [...Array(2)].map(async (item, index) => {
      const response = await api.get('/tv/airing_today',
          {
            params: {
              api_key: process.env.REACT_APP_TMDB_API_KEY,
              page: page + index + 1,
            },
          });
      if (response.data) {
        dispatch({
          type: ActionType.GETAIRINGTODAYTVSHOWS,
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

// Get the On Air TV Shows for TV-Shows-Page from TMDB API
export const getonairtvshows = (page) => async (dispatch) => {
  try {
    [...Array(2)].map(async (item, index) => {
      const response = await api.get('/tv/on_the_air',
          {
            params: {
              api_key: process.env.REACT_APP_TMDB_API_KEY,
              page: page + index + 1,
            },
          });
      if (response.data) {
        dispatch({
          type: ActionType.GETONAIRTVSHOWS,
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

// Get the Top Rated TV Shows for TV-Shows-Page from TMDB API
export const gettopratedtvshows = (page) => async (dispatch) => {
  try {
    [...Array(2)].map(async (item, index) => {
      const response = await api.get('/tv/top_rated',
          {
            params: {
              api_key: process.env.REACT_APP_TMDB_API_KEY,
              page: page + index + 1,
            },
          });
      if (response.data) {
        dispatch({
          type: ActionType.GETTOPRATEDTVSHOWS,
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

// Get the Tv show Details for details-page from TMDB API
export const gettvshowdetails = (id) => async (dispatch) => {
  try {
    const response = await api.get(`/tv/${id}`,
        {
          params: {
            api_key: process.env.REACT_APP_TMDB_API_KEY,
          },
        });
    if (response.data) {
      dispatch({
        type: ActionType.GETTVSHOWDETAILS,
        payload: response.data,
      });
    } else {
      console.log('streammovies Error >>', response);
    }
  } catch (error) {
    console.log('streammovies Error >>', error);
  }
};

// Get the TV Show Credits for details-page from TMDB API
export const gettvshowcredits = (id) => async (dispatch) => {
  try {
    const response = await api.get(`/tv/${id}/credits`,
        {
          params: {
            api_key: process.env.REACT_APP_TMDB_API_KEY,
          },
        });
    if (response.data) {
      dispatch({
        type: ActionType.GETTVSHOWCREDITS,
        payload: response.data,
      });
    } else {
      console.log('streammovies Error >>', response);
    }
  } catch (error) {
    console.log('streammovies Error >>', error);
  }
};

// Get the Tv Show Reviews for details-page from TMDB API
export const gettvshowreviews = (id) => async (dispatch) => {
  try {
    const response = await api.get(`/tv/${id}/reviews`,
        {
          params: {
            api_key: process.env.REACT_APP_TMDB_API_KEY,
          },
        });
    if (response.data) {
      dispatch({
        type: ActionType.GETTVSHOWREVIEWS,
        payload: response.data,
      });
    } else {
      console.log('streammovies Error >>', response);
    }
  } catch (error) {
    console.log('streammovies Error >>', error);
  }
};

// Get the Tv Show Keywords for details-page from TMDB API
export const gettvshowkeywords = (id) => async (dispatch) => {
  try {
    const response = await api.get(`/tv/${id}/keywords`,
        {
          params: {
            api_key: process.env.REACT_APP_TMDB_API_KEY,
          },
        });
    if (response.data) {
      dispatch({
        type: ActionType.GETTVSHOWKEYWORDS,
        payload: response.data,
      });
    } else {
      console.log('streammovies Error >>', response);
    }
  } catch (error) {
    console.log('streammovies Error >>', error);
  }
};

// Get the TV Shows External Link (like facebook-page, insta, etc) from TMDB API
export const getexternallinks = (id) => async (dispatch) => {
  try {
    const response = await api.get(`/tv/${id}/external_ids`,
        {
          params: {
            api_key: process.env.REACT_APP_TMDB_API_KEY,
          },
        });
    if (response.data) {
      dispatch({
        type: ActionType.GETTVSHOWEXTERNALLINKS,
        payload: response.data,
      });
    } else {
      console.log('streammovies Error >>', response);
    }
  } catch (error) {
    console.log('streammovies Error >>', error);
  }
};

// Get the TV Show Images & Videos from TMDB API
export const gettvshowimagesandvideos = (id) => async (dispatch) => {
  try {
    const images = api.get(`/tv/${id}/images`,
        {
          params: {
            api_key: process.env.REACT_APP_TMDB_API_KEY,
          },
        });
    const videos = api.get(`/tv/${id}/videos`,
        {
          params: {
            api_key: process.env.REACT_APP_TMDB_API_KEY,
          },
        });
    const response = await Promise.all([images, videos]);
    if (response[0].data) {
      dispatch({
        type: ActionType.GETTVSHOWIMAGES,
        payload: response[0].data,
      });
    } if (response[1].data) {
      dispatch({
        type: ActionType.GETTVSHOWVIDEOS,
        payload: response[1].data,
      });
    } else {
      console.log('streammovies Error >>', response);
    }
  } catch (error) {
    console.log('streammovies Error >>', error);
  }
};

// Get the Tv Show Recommendations from TMDB API
export const gettvshowrecomendations = (id) => async (dispatch) => {
  try {
    const response = await api.get(`/tv/${id}/recommendations`,
        {
          params: {
            api_key: process.env.REACT_APP_TMDB_API_KEY,
          },
        });
    if (response.data) {
      dispatch({
        type: ActionType.GETTVSHOWRECOMMENDATIONS,
        payload: response.data,
      });
    } else {
      console.log('streammovies Error >>', response);
    }
  } catch (error) {
    console.log('streammovies Error >>', error);
  }
};
export const cleartvshowdetails = () => (dispatch) => {
  dispatch({
    type: ActionType.CLEARTVSHOWDETAILS,
  });
};
