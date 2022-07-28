import PropTypes from "prop-types";
import { MovieGalleryItem, MovieGalleryItemImage, MovieGalleryItemTitle } from "./MovieGalleryItem.styled";

export const GalleryItem = ({ movie }) => {
    let poster;

    if (movie.poster_path) { 
        poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    } else {
        poster = 'https://bflix.biz/no-poster.png';
    };
    return (
        <MovieGalleryItem>
            <MovieGalleryItemTitle>{movie.title}</MovieGalleryItemTitle>
            <MovieGalleryItemImage src={poster} alt={movie.title} />
        </MovieGalleryItem>
    );
};

GalleryItem.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }),
};