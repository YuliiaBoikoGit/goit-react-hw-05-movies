import { useEffect, useState } from "react";
import { fetchTrendingsMovies } from "api/moviesApi";
import { MovieGallery } from "components/MovieGallery/MovieGallery";
import { LoadButton } from "components/LoadBtn/LoadBtn";

export const Home = () => {
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchTrendingsMovies(page).then(data => {
            setMovies(prevState => [...prevState, ...data.results]);
        });
    }, [page]);

    const loadMore = () => {
        setPage(prevState => prevState + 1);
    };

    const itemsPerPage = 20;
    
    return (
        <>
            <MovieGallery movies={movies} />
        
            {movies.length >= itemsPerPage && <LoadButton onClick={loadMore} />}
        </>    
    );
};
