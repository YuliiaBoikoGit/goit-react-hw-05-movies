import { useEffect, useState } from "react";
import { fetchTrendingsMovies } from "api/moviesApi";
import { MovieGallery } from "components/MovieGallery/MovieGallery";
import { GalleryTitle } from "components/GalleryTitle/GalleryTitle";
import { LoadButton } from "components/LoadBtn/LoadBtn";

const Home = () => {
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchTrendingsMovies(page).then(data => {
            setMovies(prevState => [...prevState, ...data.results]);
        }).catch(error => setError(error));
    }, [page]);

    const loadMore = () => {
        setPage(prevState => prevState + 1);
    };

    const itemsPerPage = 20;
    
    return (
        <>
            <GalleryTitle />

            {error && <p>{error.message}</p>}
            
            <MovieGallery movies={movies} />
        
            {movies.length >= itemsPerPage && <LoadButton onClick={loadMore} />}
        </>    
    );
};

export default Home;