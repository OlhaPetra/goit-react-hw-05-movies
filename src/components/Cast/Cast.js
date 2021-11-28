import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MoviesApi from '../../services-api/MoviesAPI';
import defaultImg from '../../img/default.jpg';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    MoviesApi.CastMoviesFetch(movieId).then(data => setCast(data.cast));
  }, [movieId]);

  if (cast.length === 0) {
    return <p>We don't have cast for this movie.</p>;
  }

  return (
    <>
      <ul>
        {cast.map(item => {
          return (
            <li key={item.id}>
              <img
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w185/${item.profile_path}`
                    : defaultImg
                }
                alt={item.name}
                width={185}
                height={280}
              />
              <h4>{item.name}</h4>
              <p>{item.character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;
