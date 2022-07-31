import { Outlet, useLocation } from "react-router-dom";
import { Suspense } from "react";
import { PageLoader } from "components/Loader/Loader";
import {
    Container,
    Link,
    LinkList,
    LinkListItem,
    Image,
    Button,
    MovieInfoContainer,
    MovieDetailsContainer,
    MovieTitle,
    Info,
    Title,
    Genres
} from "./MovieInfo.styled";

export const MovieInfo = ({ movie, onClick }) => {
    const location = useLocation();
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
        <Container>
            <Button type="button" onClick={onClick}>Go back</Button>
            <MovieDetailsContainer> 
                <Image src={poster} alt={movie.title} />
                <MovieInfoContainer>
                    <MovieTitle>{movie.title} ({releaseDate})</MovieTitle>
                    <Info>User score: {voteAverage}</Info>
                    <Title>Overview</Title>
                    <Info>{movie.overview}</Info>
                    <Title>Genres</Title>
                    <Genres>{movieGenres.map(genre => genre.name).join(', ')}</Genres> 
                    <Title>Additional information</Title>
                    <LinkList>
                        <LinkListItem><Link to="cast" state={location.state}>Cast</Link></LinkListItem>
                        <LinkListItem><Link to="reviews" state={location.state}>Reviews</Link></LinkListItem>
                    </LinkList>
            </MovieInfoContainer>    
             </MovieDetailsContainer>          
            <Suspense fallback={<PageLoader />}>
                <hr />
                <Outlet />
            </Suspense>
        </Container>
    );
};