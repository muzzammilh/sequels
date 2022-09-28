import {ActionType} from '../Contants/action-type';

const inisialState = {
  popularTvShows: {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  onTvShow: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  onAirTodayTvShows: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  topRatedTvShows: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  tvShowDetails: null,
  tvShowCredits: null,
  tvShowVideos: null,
  tvShowReviews: null,
  tvShowExternalids: null,
  tvShowKeywords: null,
  tvShowImages: null,
  tvShowVideos: null,
  tvShowRecommendations: null,
};
export const tvShowsReducer = (state = inisialState, action) => {
  switch (action.type) {
    case ActionType.GETSTREEMINGTVSHOWS:
      return {
        ...state, popularTvShows: action.payload,
      };
      case ActionType.GETTVSHOWDETAILS:
      return {
        ...state, tvShowDetails: action.payload,
      };
    case ActionType.GETTVSHOWCREDITS:
      return {
        ...state, tvShowCredits: action.payload,
      };
    case ActionType.GETTVSHOWREVIEWS:
      return {
        ...state, tvShowReviews: action.payload,
      };
    case ActionType.GETTVSHOWREVIEWS:
      return {
        ...state, tvShowReviews: action.payload,
      };
    case ActionType.GETTVSHOWEXTERNALLINKS:
      return {
        ...state, tvShowExternalids: action.payload,
      };
    case ActionType.GETTVSHOWIMAGES:
      return {
        ...state, tvShowImages: action.payload,
      };
    case ActionType.GETTVSHOWVIDEOS:
      return {
        ...state, tvShowVideos: action.payload,
      };
    case ActionType.GETTVSHOWRECOMMENDATIONS:
      return {
        ...state, tvShowRecommendations: action.payload,
      };
    case ActionType.CLEARTVSHOWDETAILS:
      return {
        ...state, tvShowDetails: null, tvShowCredits: null,
        tvShowReviews: null, tvShowExternalids: null, tvShowExternalids: null,
        tvShowImages: null, tvShowVideos: null, tvShowRecommendations: null,
      };
    case ActionType.GETPOPULARTVSHOWS:
      return {
        ...state, popularTvShows: {
          page: action.payload.page,
          results: [...state.popularTvShows.results, ...action.payload.results],
          total_pages: action.payload.total_pages,
          total_results: action.payload.total_results,
        },
      };
    case ActionType.GETAIRINGTODAYTVSHOWS:
      return {
        ...state, onAirTodayTvShows: {
          page: action.payload.page,
          results: [...state.onAirTodayTvShows.results,
            ...action.payload.results],
          total_pages: action.payload.total_pages,
          total_results: action.payload.total_results,
        },
      };
    case ActionType.GETONAIRTVSHOWS:
      return {
        ...state, onTvShow: {
          page: action.payload.page,
          results: [...state.onTvShow.results,
            ...action.payload.results],
          total_pages: action.payload.total_pages,
          total_results: action.payload.total_results,
        },
      };
    case ActionType.GETTOPRATEDTVSHOWS:
      return {
        ...state, topRatedTvShows: {
          page: action.payload.page,
          results: [...state.topRatedTvShows.results,
            ...action.payload.results],
          total_pages: action.payload.total_pages,
          total_results: action.payload.total_results,
        },
      };
    default:
      return state;
  }
};
