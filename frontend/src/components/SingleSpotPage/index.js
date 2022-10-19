import { useSelector, useDispatch } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { useParams, useHistory, NavLink, Link } from "react-router-dom";
import {SpotDetailThunk} from '../../store/spot'
import { deleteSpotThunk } from "../../store/spot";
import DeleteSpotForm from "../DeleteSpot";
import {loadAllReviews} from '../../store/review'
const SpotDetail = () => {
    const {spotId} = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const currentSpot = useSelector(state=>state.spot.singleSpot)
    const currentUser = useSelector(state=> state.session.user)
    const reviews = useSelector(state=>Object.values(state.review))
    // const spotReviews = reviews.filter((review)=>review.userId === spotId)

    useEffect(()=> {
        dispatch(SpotDetailThunk(spotId))
        // .then((res)=>setisLoaded(true))
    }, [dispatch, spotId])

    useEffect(()=> {
        dispatch(loadAllReviews(spotId))
    },[])

    return (
        <div>
           <h3>{currentSpot.name}</h3> <Link to={`/spots/${spotId}/editspot`}><button>Edit Spot</button></Link>
            <div> {currentUser && currentSpot.ownerId === currentUser.id ? <DeleteSpotForm /> : null} </div>
            <p>avgRating, reviews,</p><span>{currentSpot.city}, {currentSpot.country}</span>
            <p>spotImage</p>
            <p>{currentSpot.description}</p>
            <h4>Reviews</h4>
            <div>
                {reviews.map((review)=>(
                    <div>
                        <p>{review.User.firstName}</p><span>{review.stars} star</span>
                        <p>{review.review}</p>
                    </div>
                  ))}
            </div>
        </div>
    )
}
export default SpotDetail;
