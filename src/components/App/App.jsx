import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Container, Header, Link, Nav } from "./App.styled";
import { PageLoader } from "components/Loader/Loader";

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
    <Container>
      <Header>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </Header>  
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
    </Container>
  );
};