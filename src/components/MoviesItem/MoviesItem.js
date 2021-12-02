import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MoviesItem = ({ item }) => {
  const location = useLocation();

  return (
    <>
      <Link to={`/movies/${item.id}`} state={{ from: location }}>
        <li>
          <h3>{item.title || item.name}</h3>
        </li>
      </Link>
    </>
  );
};

export default MoviesItem;
