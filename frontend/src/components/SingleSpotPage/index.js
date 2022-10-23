import { useSelector, useDispatch } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { useParams, useHistory, NavLink, Link } from "react-router-dom";
import {getOneSpot} from '../../store/spot'
import DeleteSpotForm from "../DeleteSpot";
import {loadAllReviews, createReview} from '../../store/review'
import ReviewPortion from "../Review";
import CreateReviewModal from '../CreateReview/reviewModal'
import genericPic from './yuccavalley.png'

const SpotDetail = () => {
    const {spotId} = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    let isOwner = false
    const currentSpot = useSelector(state=>state.spot.singleSpot)
    const currentUser = useSelector(state=> state.session.user)
    // console.log(currentSpot.Owner.firstName)
    if(currentUser?.id === currentSpot.ownerId) isOwner = true





    useEffect(()=> {
        dispatch(getOneSpot(spotId))
    }, [dispatch, spotId])


    return (
        <>
        <div className="singleSpot-Container">
            <div className="singleSpot-Header">
            <div className="singleSpot-Header-name">
                <h1>{currentSpot.name}</h1>
            </div>
            <div className="singleSpot-Header-detail">
            {currentSpot.avgRating ?
              (<span>★ {currentSpot.avgRating}  ·  </span>):
              (<span>★ New  ·  </span>)
            }
            <span>{currentSpot.city}, {currentSpot.state}, {currentSpot.country}</span>
            <span>Entire Spot hosted by {currentSpot?.Owner?.firstName}  ·  </span>
            </div>
            </div>

            <div>
                <div>
                <img src={currentSpot?.SpotImages?.[0]?.url}/>
                </div>
            </div>

            <div>
                <div>
                <img src={currentSpot?.SpotImages?.[1]?.url}/>
                <img src={currentSpot?.SpotImages?.[2]?.url}/>
                <img src={currentSpot?.SpotImages?.[3]?.url}/>
                <img src={currentSpot?.SpotImages?.[4]?.url}/>
                </div>
            </div>
        <div className="singleSpot-Container-Bot">
            <div className="below-spotImg">
                {/* <h2>Entire spot Hosted by {currentSpot.Owner.firstName}</h2> */}
            </div>
            <p>{currentSpot.description}</p>
            </div>

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
