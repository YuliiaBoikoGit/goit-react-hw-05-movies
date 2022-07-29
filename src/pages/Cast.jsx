import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieCast } from "api/moviesApi";
import { CastInfo } from "components/CastInfo/CastInfo";

export const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => { 
      async function fetchData() {
        const movie = await fetchMovieCast(movieId);
        setMovieCast(movie.cast);
    };
    fetchData();
  }, [movieId]);

  return (
    <ul>
      {movieCast.map(actor => <CastInfo key={actor.id} actor={actor} />)}
    </ul>
  );
};