import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector  } from "react-redux";
import { createReview } from "../../store/review";

const CreateReview = ({spotId}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [review, setReview] = useState('')
    const [stars, setStars] = useState(5)
    const [errors, setErrors] = useState([])

    const currentUser = useSelector(state=> state.session.user)
    const currentSpot = useSelector(state=> state.spot.singleSpot)
    // const spotId = currentSpot.id
    const [submitted, setSubmitted] = useState(false)
    const spotReivews = useSelector(state=>Object.values(state.review.spotReviews))




const handleReviewSubmit = async (e)=> {
    e.preventDefault()
    const Errors = []
    setErrors([])
    setSubmitted(true)
    if(!review.length) Errors.push('Must leave a review before submitting')
    if(stars<1 || stars >5) Errors.push('rating must be from 1 to 5')
    spotReivews.forEach((review)=> {
        if(review.userId === currentUser.id)Errors.push('You already have a review for this spot')
    })

    setErrors(Errors)

    const reviewData = {review, stars}

    const newReview = await dispatch(createReview(reviewData, spotId, currentUser))
    .then(()=>{
        alert('Thank you for your feedback')
    })
}

return (
<div>
    <div>
      {
      submitted &&
      errors?.map((error)=>(<div key={error}>{error}</div>))
      }
    </div>
    <form onSubmit={handleReviewSubmit} >
        <label>
            Review:
            <input
              type="text"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
        </label>

        <label>
            Stars:
            <select
                type='number'
                value={stars}
                onChange={(e)=> setStars(e.target.value)}
                required>
                {[1,2,3,4,5].map((rating)=>(<option>{rating}</option>))}
                </select>
        </label>
                <button type="submit">Submit Review</button>
                </form>
    </div>
)
}


export default CreateReview;
