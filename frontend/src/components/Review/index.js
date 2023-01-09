import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
// import { loadAllReviews } from "../../store/review";
import './review.css'
const ReviewPortion = ({spotReviews}) => {

    const dispatch = useDispatch()
    const history = useHistory()
    // const {spotId} = props
    // const reviews = useSelector(state=>Object.values(state.review.spotReviews))

    // useEffect(()=> {
    //     dispatch(loadAllReviews(spotId))
    // },[])


    return (
        <>
        {
          spotReviews.map((review) => (
            <div className="single-review">
              <div className="rev_item_head_wrapper">
              <h3>{review?.User?.firstName}</h3>
              <p className="single-review-star">
                {review.stars} ★
              </p>
              </div>
              <div id='rev_date'>{(new Date(review.createdAt)).toLocaleDateString() }</div>
              <p className="single-review-content">
                <span className="rev_content">
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
