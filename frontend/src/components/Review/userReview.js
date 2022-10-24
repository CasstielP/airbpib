import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as reviewActions from '../../store/review'
import { useEffect } from 'react'
import './review.css'



const UserReviews = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const userReviews = useSelector(state=> Object.values(state.review.userReviews))


    useEffect(() => {
        dispatch(reviewActions.getUserReviews())
    }, [])

    const handleDeleteReview = (reviewId) => {
        if (window.confirm('are you sure to delete this review?')) {
            dispatch(reviewActions.deleteReviewThunk(reviewId))
            alert('Review Successully Deleted')
        }
    }


    return (


        <>
        {/* <h2>Your Reivews</h2> */}
        {
          userReviews.map((review) => (
            <div className="single-review">

              <h3>{review.User.firstName}{" "}{review.User.lastName}</h3>
              <p className="single-review-stars">
                {review.stars} ★
              </p>
              <p className="single-review-content">
                <span>
                  "{review.review}"
                </span>
              </p>
              <div>
                {
                  review.ReviewImages &&
                  review.ReviewImages.map((image) => {
                    return (
                      <img
                      className="single-review-image"
                      src={image.url} />
                    )
                  })
                }
              </div>
              <button className='rv-submit-button' onClick={()=>handleDeleteReview(review.id)} >Delete Review</button>
            </div>
          ))
        }
        </>













        // <div>
        //     <div>
        //         <div>
        //             {userReviews.map((review)=> (
        //                 <div key={review.id}>
        //                     <div>{review.User.firstName}</div>
        //                     <div>{review.stars}⭐</div>
        //                     <div>{review.review}</div>
        //                     <button onClick={()=>handleDeleteReview(review.id)} >Delete Review</button>
        //                 </div>
        //             ))
        //             }
        //         </div>
        //     </div>
        // </div>
    )


}
export default UserReviews
