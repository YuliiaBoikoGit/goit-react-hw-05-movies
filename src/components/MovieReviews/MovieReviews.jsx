export const MovieReviews = ({ review }) => {
    return (
        <li>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
        </li>
    )
};