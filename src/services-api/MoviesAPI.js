import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c4d6c6cd7ae75702c01e6a9bda1adcd5';

function TrendMoviesFetch() {
  return axios
    .get(`trending/day/week?api_key=${API_KEY}`)
    .then(response => response.data);
}

function DetailsMoviesFetch(id) {
  return axios
    .get(`movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data);
}

function MoviesByQueryFetch(query, page = 1) {
  return axios
    .get(`search/movie?api_key=${API_KEY}&query=${query}&page=${page}`)
    .then(response => response.data);
}

function CastMoviesFetch(id) {
  return axios
    .get(`movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data);
}

function ReviewsMoviesFetch(id, page = 1) {
  return axios
    .get(`movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=${page}`)
    .then(response => response.data);
}

const MoviesApi = {
  TrendMoviesFetch,
  DetailsMoviesFetch,
  MoviesByQueryFetch,
  CastMoviesFetch,
  ReviewsMoviesFetch,
};

export default MoviesApi;
