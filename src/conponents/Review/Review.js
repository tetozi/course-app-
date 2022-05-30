import './Review.css'

const Review = ({ reviews }) => {
   // const dony =  http://localhost:5000/images/users/user-61cd81d2876b82db54d6b36b-1648814203862.jpeg
   

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