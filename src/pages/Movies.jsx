import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchMoviesByName } from 'api/moviesApi';
import { Searchbar } from 'components/SearchBar/SearchBar';
import { Info } from 'components/SearchBar/SearchBar.styled';
import { MovieGallery } from 'components/MovieGallery/MovieGallery';
import { LoadButton } from 'components/LoadBtn/LoadBtn';

export const Movies = () => {
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState([]);
    const [movieName, setMovieName] = useState('');
    const [error, setError] = useState('');

    useEffect(() => { 
        if (!movieName) return;

        fetchMoviesByName(movieName, page)
        .then(data => {
            if (data.total_results === 0) {
                throw new Error('Sorry, there are no movies matching your search query. Please try again.');
            };

            if (data.results.length === 0) {
                setMovieName('');
                return toast.error("We're sorry, but you've reached the end of search results.");
            };

            setMovies(prevState => [...prevState, ...data.results]);
        })
        .catch(error => setError(error));
    }, [movieName, page]);

    const handleFormSubmit = movieName => {
        setMovieName(movieName);
        setPage(1);
        setMovies([]);
        setError('');
    };

    const loadMore = () => {
        setPage(prevState => prevState + 1);
    };

    const itemsPerPage = 20;
    
    return (
        <>
            <Searchbar onSubmit={handleFormSubmit} />

            {error && <Info>{error.message}</Info>}

            <MovieGallery movies={movies} />

            {movies.length >= itemsPerPage && movieName && <LoadButton onClick={loadMore} />}

            <ToastContainer position="top-center" />
        </>
    );
};