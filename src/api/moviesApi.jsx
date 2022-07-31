import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '7618f77ef746f0154def67b21921ec43';

export const fetchTrendingsMovies = async (page) => {
    const res = await axios.get(`/trending/movie/week?api_key=${API_KEY}&page=${page}`);

    return res.data;
};

export const fetchMoviesByName = async (query, page) => {
    const searchParams = new URLSearchParams({
        language: 'en-US',
        page,
        include_adult: false,
    });
    const res = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}&${searchParams}`);

    return res.data;
};

export const fetchMovieByID = async (movieID) => {
    const res = await axios.get(`/movie/${movieID}?api_key=${API_KEY}`);
    
    return res.data;
};

export const fetchMovieCast = async (movieID) => {
    const res = await axios.get(`/movie/${movieID}/credits?api_key=${API_KEY}`);

    return res.data;
};

export const fetchMovieReviews = async (movieID) => {
    const res = await axios.get(`/movie/${movieID}/reviews?api_key=${API_KEY}`);

    return res.data;
};