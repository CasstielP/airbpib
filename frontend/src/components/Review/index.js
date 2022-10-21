import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { loadAllReviews } from "../../store/review";
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
        <div>
            {
                reviews.map((review)=> {
                    return (
                        <div  key={review.id}>
                            <div>{review.User.firstName}</div>
                            <div>{review.stars}⭐</div>
                            <div>{review.review}</div>
                        </div>
                    )
                })
            }
        </div>
        </>
    )


}

export default ReviewPortion
