import { useSelector, useDispatch } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { useParams, useHistory, NavLink, Link } from "react-router-dom";
import {getOneSpot} from '../../store/spot'
import DeleteSpotForm from "../DeleteSpot";
import {loadAllReviews, createReview} from '../../store/review'
import ReviewPortion from "../Review";
import CreateReviewModal from '../CreateReview/reviewModal'
import genericPic from './yuccavalley.png'
import './singleSpot.css'



const SpotDetail = () => {
    const {spotId} = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    let isOwner = false
    const currentSpot = useSelector(state=>state.spot.singleSpot)
    const currentUser = useSelector(state=> state.session.user)
    console.log(currentSpot)
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
            {/* <span>Entire Spot hosted by {currentSpot?.Owner?.firstName}  ·  </span> */}
            </div>
            </div>

            <div className="singleSpot-imgContainer">
            <div>
                <img className="mainSpot-img" src={currentSpot?.SpotImages?.[0]?.url}/>
            </div>

            <div className="subImg-container">
                <img src={currentSpot?.SpotImages?.[1]?.url}/>
                <img src={currentSpot?.SpotImages?.[2]?.url}/>
                <img src={currentSpot?.SpotImages?.[3]?.url}/>
                <img src={currentSpot?.SpotImages?.[4]?.url}/>
            </div>
            </div>
        <div className="singleSpot-Container-Bot">
            <div className="below-spotImg">
                <h2>Entire spot Hosted by {currentSpot?.Owner?.firstName}</h2>
            </div>
            <div className="spot-linebreak"></div>
            <div><p>{currentSpot.description}</p></div>



            <div className="price-rating-container">
            <div className="prc-header">
              <div>
                <span className="one-spot-price">${currentSpot.price}</span> night
              </div>
            <div className="pr-review">
                  <span>
                  {currentSpot.avgRating ?
                    (<span className="bold">★ {currentSpot.avgRating}</span>):
                    (<span className="bold">★ New</span>)
                  }
                  </span>
              </div>
            </div>
          </div>
         </div>
         <div className="spot-linebreak long"></div>


         <h2 className="reviewHeader-container">
            <span>
            {currentSpot.avgRating ?
              (<span className="bold">★ {currentSpot.avgRating}  ·   </span>):
              (<span className="bold">★ New  ·   </span>)
            }
            </span>
            <span>Reviews</span>
        </h2>

        <div>
          {
            currentUser &&
            !isOwner &&
            <CreateReviewModal spotId={spotId}/>
          }
        </div>


        <div className="spot-review-container">
          <ReviewPortion spotId={spotId}/>
        </div>
        </div>

        </>
    )
}
export default SpotDetail;
