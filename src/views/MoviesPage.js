import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

import SearchBar from '../components/SearchBar/SearchBar';
import MoviesList from '../components/MoviesList/MoviesList';
import MoviesApi from '../services-api/MoviesAPI';

const MoviesPage = () => {
  const [query, setQuery] = useState();
  const [movies, setMovies] = useState();

  const location = useLocation();
  const navigate = useNavigate();

  const [queryURL] = useState(() =>
    new URLSearchParams(location.search).get('query'),
  );
  const allQuery = query || queryURL;

  const onSubmit = value => {
    setQuery(value);
    navigate({ search: `query=${value}` });
  };

  useEffect(() => {
    if (!allQuery) {
      return;
    }
    searchMovies();
  }, [allQuery]);

  const searchMovies = () => {
    MoviesApi.MoviesByQueryFetch(allQuery).then(data => {
      if (data.results.length === 0) {
        alert(`No movies were found for your query - "${query}"!`);
        return;
      }
      setMovies(data.results);
    });
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {movies && <MoviesList items={movies} />}
    </>
  );
};

export default MoviesPage;
