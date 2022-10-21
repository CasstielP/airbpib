import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector  } from "react-redux";
import { createReview } from "../../store/review";
const CreateReview = (id) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [review, setReview] = useState('')
    const [stars, setStars] = useState('')

    const currentUser = useSelector(state=> state.session.user)
    const [submit, setSubmit] = useState(false)


const handleReviewSubmit =(e)=> {
    e.preventDefault()

    const errors = []

    const reviewData = {}





}

return (
<div>
    <div>
      {
      hasSubmitted &&
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
                min='1'
                max='5'
                value={stars}
                onChange={(e)=> setStars(e.target.value)}
                placeholder='rating'
                required>
                </select>
        </label>


                <button type="submit">Submit</button>
                </form>
    </div>
)

}


export default CreateReview;
