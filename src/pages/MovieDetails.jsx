import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchMovieByID } from "api/moviesApi";
import { MovieInfo } from "components/MovieInfo/MovieInfo";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => { 
      async function fetchData() {
       try {
          const movie = await fetchMovieByID(movieId);
          setMovie(movie);
        } catch (error) {
          setError(error);
        };
    };
    fetchData();
  }, [movieId]);

  const handleGoBack = () => {
    navigate(location?.state?.from ?? "/");
  };

  return (
    <main>
      {error && toast.error(error.message)}

      <MovieInfo movie={movie} onClick={handleGoBack} />

      <ToastContainer position="top-center" />
    </main>
  );
};

export default MovieDetails;