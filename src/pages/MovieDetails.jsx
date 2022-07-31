import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieByID } from "api/moviesApi";
import { MovieInfo } from "components/MovieInfo/MovieInfo";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    navigate(location?.state?.from ?? "/");
  };
  

  useEffect(() => { 
      async function fetchData() {
        const movie = await fetchMovieByID(movieId);
        setMovie(movie);
    };
    fetchData();
  }, [movieId]);

  return (
    <main>
      <MovieInfo movie={movie} onClick={handleGoBack} />
    </main>
  );
};

export default MovieDetails;