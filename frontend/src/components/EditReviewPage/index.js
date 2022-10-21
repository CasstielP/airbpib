import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import * as reviewActions from "../../store/review";


function EditReview() {
    const {reviewId} = useParams()
    const currentReview = useSelector(state=> state.review.spotReviews[reviewId])

    const [review, setReview] = useState(currentReview.review)
    const [stars, setStars] = useState(currentReview.stars)


    return (
        <form onSubmit={handleReviewSubmit} >
                <textarea
                    type='text' value={review}
                    onChange={(e)=> setReview(e.target.value)}
                    placeholder='tell us your experience'
                    required
                    />

                <input
                type='number'
                min='1'
                max='5'
                value={stars}
                onChange={(e)=> setStars(e.target.value)}
                placeholder='rating'
                required
                />

                <button type="submit">Submit</button>
        </form>
    )






}


export default EditReview
