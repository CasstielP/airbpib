import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReview } from "../../store/review";
import {getOneSpot} from '../../store/spot'
import {loadAllReviews} from '../../store/review'
import './reviewForm.css'
const CreateReview = ({ spotId, setShowModal }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [review, setReview] = useState("");
  const [stars, setStars] = useState(5);
  const [errors, setErrors] = useState([]);

  const currentUser = useSelector((state) => state.session.user);
  const currentSpot = useSelector((state) => state.spot.singleSpot);
  let id = currentSpot.id;

  const [submitted, setSubmitted] = useState(false);
  // const spotReivews = useSelector(state=>Object.values(state.review.spotReviews))
  // console.log(spotReivews)

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    const Errors = [];
    setErrors([]);
    setSubmitted(true);
    if (!review.length) Errors.push("Must leave a review before submitting");
    setErrors(Errors);

    if (Errors.length) return;

    const reviewData = { review, stars };


    const newReview = await dispatch(createReview(id, reviewData))
    .catch(async (response) => {
        const message = await response.json()
        const reviewError = []
        if (message) {
          reviewError.push(message.message)
          setErrors(reviewError)
        }
      })
    if(newReview) setShowModal(false)
  };

  return (
    <div className="create_review_modal_container">
      <div className="review-modal-subheader">hope you had a pleasant stay</div>

      <div className="errorList">
        {submitted &&
          errors &&
          errors.map((error) => <div key={error}>{error}</div>)}
      </div>

      <form onSubmit={handleReviewSubmit}>
        <div className="create_review_content">
          <label className="review-rating">
            Rating:&nbsp;
            <select
              type="number"
              value={stars}
              onChange={(e) => setStars(e.target.value)}
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option>{num}</option>
              ))}
            </select>
          </label>
          <div className="form-input-break"></div>
          <label className="review-rating">
            Review:
            <textarea
              type="text"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </label>
          <div className="form-input-break"></div>
        </div>

        <button className="cr-modal">Create Review</button>
      </form>
    </div>

    // {/* <div>
    //     <div>
    //       {
    //       submitted &&
    //       errors?.map((error)=>(<div key={error}>{error}</div>))
    //       }
    //     </div>
    //     <form onSubmit={handleReviewSubmit} >
    //         <label>
    //             Review:
    //             <input
    //               type="text"
    //               value={review}
    //               onChange={(e) => setReview(e.target.value)}
    //             />
    //         </label>

    //         <label>
    //             Stars:
    //             <select
    //                 type='number'
    //                 value={stars}
    //                 onChange={(e)=> setStars(e.target.value)}
    //                 required>
    //                 {[1,2,3,4,5].map((rating)=>(<option>{rating}</option>))}
    //                 </select>
    //         </label>
    //                 <button type="submit">Submit Review</button>
    //                 </form>
    //     </div> */}
  );
};

export default CreateReview;
