import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieCast } from "api/moviesApi";
import { CastInfo } from "components/CastInfo/CastInfo";

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => { 
      async function fetchData() {
        try {
          const movie = await fetchMovieCast(movieId);
          setMovieCast(movie.cast);
        } catch (error) {
          setError(error);
        };
    };
    fetchData();
  }, [movieId]);

  return (
    <ul>
      {error && <p>{error.message}</p>}

      {movieCast.map(actor => <CastInfo key={actor.credit_id} actor={actor} />)}
    </ul>
  );
};

export default Cast;