import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "components/Layout/Layout";

const Home = lazy(() =>
  import('pages/Home' /* webpackChunkName: "home" */)
);
const Movies = lazy(() =>
  import('pages/Movies' /* webpackChunkName: "movies" */)
);
const Cast = lazy(() =>
  import('pages/Cast' /* webpackChunkName: "cast" */)
);
const Reviews = lazy(() =>
  import('pages/Reviews' /* webpackChunkName: "reviews" */)
);
const MovieDetails = lazy(() =>
  import('pages/MovieDetails' /* webpackChunkName: "movie-details" */)
);
const NotFound = lazy(() =>
  import('pages/NotFound' /* webpackChunkName: "not-found" */)
);

export const App = () => {
  return ( 
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};