import './Review.css'


const Review = ({ reviews }) => {
    return (
     <>
        {
            reviews.map(review => (
                <div className="review-div" key={review._id}>
                    <div className="review-box">
                        <p className="review-text">{review.review}</p>
                        <h2 className="review-header">{review.user.username}</h2>
                    </div>
                </div>
            )

            )
        }
        </>
    )
}

export default Review