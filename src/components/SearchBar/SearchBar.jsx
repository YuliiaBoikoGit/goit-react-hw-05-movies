import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { SearchBar, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from "./SearchBar.styled";

export const Searchbar = ({onSubmit}) => {
    const [movieName, setMovieName] = useState('');

    const handleNameChange = event => {
        setMovieName(event.currentTarget.value.toLowerCase());
    };

    const handleSubmit = event => {
        event.preventDefault();

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
    handleSubmit: PropTypes.func,
};