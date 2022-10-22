import { useSelector, useDispatch } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { useParams, useHistory, NavLink, Link } from "react-router-dom";
import {getOneSpot} from '../../store/spot'
import DeleteSpotForm from "../DeleteSpot";
import {loadAllReviews, createReview} from '../../store/review'
import ReviewPortion from "../Review";
import CreateReviewModal from '../CreateReview/reviewModal'
const SpotDetail = () => {
    const {spotId} = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    let isOwner = false
    const currentSpot = useSelector(state=>state.spot.singleSpot)

    const currentUser = useSelector(state=> state.session.user)
    if(currentUser?.id === currentSpot.ownerId) isOwner = true


    // const handleEdit = (e) => {
    //     history.push(`/spots/${spotId}/edit`)
    // }



    useEffect(()=> {
        dispatch(getOneSpot(+spotId))
        // .then((res)=>setisLoaded(true))
    }, [dispatch, spotId])


    return (
        <>
        <div>
           <h3>{currentSpot.name}</h3>
           {/* {<div>{currentUser && currentSpot.ownerId === currentUser.id ? <button  value={spotId} onClick={(e)=>handleEdit(e.target.value)}>Edit Spot</button> : null}</div>} */}
            {/* <div> {currentUser && currentSpot.ownerId === currentUser.id ? <DeleteSpotForm /> : null} </div> */}
            <p>avgRating, reviews,</p><span>{currentSpot.city}, {currentSpot.country}</span>
            <p>spotImage</p>
            <p>{currentSpot.description}</p>
            <h4>Reviews</h4>
            <ReviewPortion spotId={spotId}/>
            <h4>Leave a Review</h4>
            <div>
                {
                    currentUser && !isOwner &&
                    <CreateReviewModal spotId={spotId}/>
                }
            </div>
        </div>
        </>
    )
}
export default SpotDetail;
