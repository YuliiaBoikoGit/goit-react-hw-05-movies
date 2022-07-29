import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieByID } from "api/moviesApi";
import { MovieInfo } from "components/MovieInfo/MovieInfo";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');

  useEffect(() => { 
      async function fetchData() {
        const movie = await fetchMovieByID(movieId);
        setMovie(movie);
    };
    fetchData();
  }, [movieId]);

  return (
    <main>
      <MovieInfo movie={movie} />
    </main>
  );
};

export default MovieDetails;