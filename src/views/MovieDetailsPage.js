import { Suspense, lazy, useState, useEffect } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';

import MoviesApi from '../services-api/MoviesAPI';
import MoviesCard from '../components/MoviesCard/MoviesCard';
import GoBackBtn from '../components/GoBackBtn/GoBackBtn';
import Loading from '../components/Loading/Loading';
import MovieDetails from '../components/MovieDetails/MovieDetails';

const Cast = lazy(() =>
  import('../components/Cast/Cast' /* webpackChunkName: "cast" */),
);

const Reviews = lazy(() =>
  import('../components/Reviews/Reviews' /* webpackChunkName: "reviews" */),
);

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    MoviesApi.DetailsMoviesFetch(movieId)
      .then(data => setMovie(data))
      .catch(error => setError(error));
  }, [movieId]);

  return (
    <>
      <div>
        <GoBackBtn />
      </div>
      {error && <h1>NO INFORMATION ABOUT THIS MOVIE :( </h1>}
      {movie && <MoviesCard movie={movie} />}
      <hr />
      <h3>Additional information</h3>
      <MovieDetails />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
