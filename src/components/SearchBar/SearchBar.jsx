import { useState } from 'react';
import { useSearchParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { SearchBar, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from "./SearchBar.styled";

export const Searchbar = ({ onSubmit }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movieName, setMovieName] = useState(searchParams.get('query') || '');

    const handleNameChange = event => {
        setMovieName(event.currentTarget.value.toLowerCase());
    };

    const handleSubmit = event => {
        event.preventDefault();

        setSearchParams({ query: event.currentTarget.query.value.toLowerCase() });

        if (movieName.trim() === '') {
            toast.warn('Enter your query');
            return;
        };

        onSubmit(movieName);
        setMovieName('');
    };

    return (
        <SearchBar>
            <SearchForm onSubmit={handleSubmit}>
                <SearchFormButton type="submit">
                    <SearchFormButtonLabel>Search</SearchFormButtonLabel>
                </SearchFormButton>
                <SearchFormInput
                    type="text"
                    name="query"
                    autocomplete="off"
                    autoFocus
                    placeholder="Search movies"
                    value={movieName}
                    onChange={handleNameChange}
                />
            </SearchForm>
        </SearchBar>
    );
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func,
};