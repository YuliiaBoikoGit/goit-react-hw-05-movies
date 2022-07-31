import PropTypes from 'prop-types';

export const MovieReviews = ({ review }) => {
    return (
        <li>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
        </li>
    )
};

MovieReviews.propTypes = {
    review: PropTypes.shape({
        author: PropTypes.string,
        content: PropTypes.string,
    }),
};