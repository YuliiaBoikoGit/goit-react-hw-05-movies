import PropTypes from "prop-types";
import { Gallery } from "./MovieGallery.styled";
import { GalleryItem } from "components/MovieGalleryItem/MovieGalleryItem";

export const MovieGallery = ({ movies }) => {
    return (
        <>
            <Gallery>
                {movies.map(movie =>
                 <GalleryItem key={movie.id} movie={movie} />
             )}
            </Gallery>
        </>    
    );
};

Gallery.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ),
};