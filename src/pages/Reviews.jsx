import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieReviews } from "api/moviesApi";
import { MovieReviews } from "components/MovieReviews/MovieReviews";


const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => { 
      async function fetchData() {
        const movie = await fetchMovieReviews(movieId);
          setMovieReviews(movie.results);
    };
    fetchData();
  }, [movieId]);

  return (
    <ul>
      {movieReviews.map(review => <MovieReviews key={review.id} review={review} />)}
    </ul>
  );
};

export default Reviews;