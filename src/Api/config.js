const axios = require('axios');
const api = axios.create({
  baseURL: process.env.REACT_APP_TMDB_API_URL,
});
export default api;
