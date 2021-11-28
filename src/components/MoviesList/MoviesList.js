import React from 'react';
import MoviesItem from '../MoviesItem/MoviesItem';

const MoviesList = ({ items }) => {
  return (
    <ul className="Gallery">
      {items.map(item => (
        <MoviesItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default MoviesList;
