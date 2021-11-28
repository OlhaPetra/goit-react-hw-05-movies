import { React, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import AppBar from './components/AppBar/AppBar';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "HomePage"*/),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "MoviesPage"*/),
);
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage"*/),
);

function App() {
  return (
    <div className="conteiner">
      <AppBar />
      <Suspense
        fallback={
          <Loader
            type="Oval"
            color="#c25555"
            height={150}
            width={150}
            className="Loader"
          />
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route
            path="/movies/:movieId/*"
            element={<MovieDetailsPage />}
          ></Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
