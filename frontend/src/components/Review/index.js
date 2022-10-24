import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { loadAllReviews } from "../../store/review";
import './review.css'
const ReviewPortion = (props) => {

    const dispatch = useDispatch()
    const history = useHistory()
    const {spotId} = props
    const reviews = useSelector(state=>Object.values(state.review.spotReviews))

    useEffect(()=> {
        dispatch(loadAllReviews(spotId))
    },[])


    return (
        <>
        {
          reviews.map((review) => (
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
            </div>
          ))
        }
        </>
    )
}

export default ReviewPortion
