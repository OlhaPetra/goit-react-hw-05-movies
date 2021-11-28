import React from 'react';
import { Link } from 'react-router-dom';

const MoviesItem = ({ item }) => {
  return (
    <>
      <Link to={`/movies/${item.id}`}>
        <li>
          <h3>{item.title || item.name}</h3>
        </li>
      </Link>
    </>
  );
};

export default MoviesItem;
