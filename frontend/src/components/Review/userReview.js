import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as reviewActions from '../../store/review'
import { useEffect } from 'react'




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
        <div>
            <div>
                <div>
                    {userReviews.map((review)=> (
                        <div key={review.id}>
                            <div>{review.User.firstName}</div>
                            <div>{review.stars}⭐</div>
                            <div>{review.review}</div>
                            <button onClick={()=>handleDeleteReview(review.id)} >Delete Review</button>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )


}
export default UserReviews
