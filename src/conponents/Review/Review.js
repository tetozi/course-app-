import './Review.css'


const Review = ({review}) => {
    return(
        <div className="review-box">
        <p className="review-text">{review.review}</p>
        <h2 className="review-header">{review.user.username}</h2>
    </div>
    )
}

export default Review