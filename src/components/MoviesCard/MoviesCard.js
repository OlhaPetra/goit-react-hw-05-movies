import defaultImg from '../../img/default.jpg';
import './MoviesCard.css';

const MoviesCard = ({ movie }) => {
  const base_img_url = 'https://image.tmdb.org/t/p/w342/';
  const movieImg = `${base_img_url}${movie.poster_path}`;
  const releaseYear = movie.release_date.split('-')[0];

  return (
    <div className="movieCard">
      <div className="movieImg">
        <img
          src={movie.poster_path ? movieImg : defaultImg}
          alt={movie.title || movie.name}
          width={345}
          height={500}
        ></img>
      </div>
      <div className="movieDescription">
        <h1>
          {movie.title || movie.name}{' '}
          <span className="movieYear">({releaseYear})</span>
        </h1>
        <p className="movieScore">User Score: {movie.vote_average}</p>

        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h2>Genres</h2>
        <ul className="movieGenres">
          {movie.genres.map(genre => (
            <li className="movieGenresItem" key={genre.id}>
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoviesCard;
