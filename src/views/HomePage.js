import React from 'react';
import { useEffect, useState } from 'react';
import MoviesApi from '../services-api/MoviesAPI';
import MoviesList from '../components/MoviesList/MoviesList';

const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState(null);
  useEffect(() => {
    MoviesApi.TrendMoviesFetch().then(data => setTrendMovies(data.results));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {trendMovies && <MoviesList items={trendMovies} />}
    </>
  );
};

export default HomePage;
