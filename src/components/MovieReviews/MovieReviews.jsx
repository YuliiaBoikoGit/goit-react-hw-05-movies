export const MovieReviews = ({ review }) => {
    return (
        <li>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
        </li>
    )
};