import { NavLink, useLocation } from 'react-router-dom';
import './MovieDetails.css';

function MovieDetails({ trailerKey }) {
  const location = useLocation();

  return (
    <div>
      <NavLink
        to="cast"
        replace
        state={{ from: location.state?.from }}
        className="AddInfoMovie"
      >
        Cast
      </NavLink>

      <NavLink
        to="reviews"
        replace
        state={{ from: location.state?.from }}
        className="AddInfoMovie"
      >
        Reviews
      </NavLink>
    </div>
  );
}

export default MovieDetails;
