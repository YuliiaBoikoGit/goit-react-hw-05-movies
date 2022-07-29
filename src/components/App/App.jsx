import { Routes, Route } from "react-router-dom";
import { Container, Header, Link, Nav } from "./App.styled";
import { Home } from "pages/Home";
import { Movies } from "pages/Movies";
import { Cast } from "pages/Cast";
import { Reviews } from "pages/Reviews";
import { MovieDetails } from "pages/MovieDetails";
import { NotFound } from "pages/NotFound";

export const App = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path=":movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>  
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};