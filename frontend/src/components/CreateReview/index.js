import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector  } from "react-redux";
import { createReview } from "../../store/review";
const CreateReview = ({spotId, setShowModal}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [review, setReview] = useState('')
    const [stars, setStars] = useState(5)
    const [errors, setErrors] = useState([])

    const currentUser = useSelector(state=> state.session.user)
    const [submitted, setSubmitted] = useState(false)


    useEffect(()=> {
        if(currentUser) setErrors([])
        else setErrors(['Must be logged in to perform this!'])
    },[currentUser])

    const reset = () => {
        setReview('')
        setStars(5)
        setErrors([])
        setSubmitted(false)
    }


const handleReviewSubmit = async (e)=> {
    e.preventDefault()
    const errors = []
    setErrors([])
    setSubmitted(true)
    const reviewData = {review, stars}

    const newReview = await dispatch(createReview(reviewData, spotId, currentUser))
    .catch(async(response)=> {
        const message = await response.json()
        const errorMessage = []
        if(message){
            errorMessage.push(message.message)
            setErrors(errorMessage)
        }
    })
    .then(()=>setShowModal(false))
    reset()
    history.push(`/spots/${spotId}`)

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
                <button>Submit Review</button>
                </form>
    </div>
)

}


export default CreateReview;
