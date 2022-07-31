import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieReviews } from "api/moviesApi";
import { MovieReviews } from "components/MovieReviews/MovieReviews";


const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => { 
      async function fetchData() {
        try {
          const movie = await fetchMovieReviews(movieId);
          
          if (movie.results.length === 0) {
            throw new Error("We don't have any reviews for this movie.");
          };

          setMovieReviews(movie.results);
        } catch (error) {
          setError(error);
        };
    };
    fetchData();
  }, [movieId]);

  return (
    <ul>
      {error && <h3>{error.message}</h3>}
      {movieReviews.map(review => <MovieReviews key={review.id} review={review} />)}
    </ul>
  );
};

export default Reviews;