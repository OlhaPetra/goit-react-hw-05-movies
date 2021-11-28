import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import MoviesApi from '../../services-api/MoviesAPI';

const Reviews = () => {
  const [reviews, setRewiews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    MoviesApi.ReviewsMoviesFetch(movieId).then(data =>
      setRewiews(data.results),
    );
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>We don't have any reviews for this movie.</p>;
  }

  return (
    <>
      <ul>
        {reviews.map(item => {
          return (
            <li key={item.id}>
              <h4>Author: {item.author}</h4>
              <p>{item.content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Reviews;
