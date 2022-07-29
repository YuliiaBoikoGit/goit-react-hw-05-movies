import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { PageLoader } from "components/Loader/Loader";

export const MovieInfo = ({ movie }) => {
    let poster;
    let releaseDate = 'No date';
    let voteAverage = 0;
    let movieGenres = [];

    if (movie.poster_path) {
        poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    } else {
        poster = 'https://bflix.biz/no-poster.png';
    };
  
    if (movie.release_date && movie.release_date !== '') {
        releaseDate = movie.release_date.slice(0, 4);
    };
  
    if (movie.vote_average) {
        voteAverage = (movie.vote_average * 10).toFixed(1) + "%";
    };
  
    if (movie.genres && movie.genres.length !== 0) {
        movieGenres = movie.genres;
    };

    return (
        <main>
            <button type="button">Go back</button>
            <img src={poster} alt={movie.title} />
            <h2>{movie.title} ({releaseDate})</h2>
            <p>User score: {voteAverage}</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{movieGenres.map(genre => genre.name).join(', ')}</p>
            <hr />
            <ul>
                <li><Link to="cast">Cast</Link></li>
                <li><Link to="reviews">Reviews</Link></li>
            </ul>
            <Suspense fallback={<PageLoader />}>
                <Outlet />
            </Suspense>
        </main>
    );
};