import { useEffect, useState } from 'react';
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
  NavLink,
} from 'react-router-dom';

import MoviesApi from '../services-api/MoviesAPI';
import MoviesCard from '../components/MoviesCard/MoviesCard';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    MoviesApi.DetailsMoviesFetch(movieId).then(data => setMovie(data));
  }, [movieId]);

  const onGoBack = () => {
    if (location.pathname === `/movies/${movieId}`) {
      navigate(-1);
    }
    if (
      location.pathname === `/movies/${movieId}/cast`) {
      navigate(-2);
    }
    if (
      location.pathname === `/movies/${movieId}/reviews`
    ) {
      navigate(-2);
    }
  };

  return (
    <>
      <div>
        <button type="button" onClick={onGoBack} className="btnBack">
          Go back
        </button>
      </div>
      {movie && <MoviesCard movie={movie} />}
      <hr />
      <h3>Additional information</h3>
      <ul>
        <li className="AddInfoMovie">
          <NavLink to={{
            pathname: `/movies/${movieId}/cast`,
            state: {from: location},
          }}>Cast</NavLink>
        </li>
        <li className="AddInfoMovie">
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/cast" element={<Cast />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
      </Routes>
    </>
  );
};

export default MovieDetailsPage;
