import { useEffect, useInsertionEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchSpots } from "../../store/spot";
import {deleteReviewThunk, getUserReviews} from '../../store/review'
const ProfilePage = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state=> state.session.user)
    const allSpots = useSelector(state=> Object.values(state.spot))
    const UserSpots = allSpots.filter((spot)=> spot.ownerId === currentUser.id)
    const userReviews = useSelector(state=> Object.values(state.review.currentUserReviews))


    useEffect(()=> {
        dispatch(fetchSpots())
    }, [])

    useEffect(()=> {
        dispatch(getUserReviews())
    },[dispatch])

    const handleDeleteReview = (reviewId) => {
        dispatch(deleteReviewThunk(reviewId))
        .then(()=> {
            alert('review successfully deleted')
        })
    }

    const handleEditReview = (e) => {
        let reviewId = e.target.value
        history.push(`/reviews/${reviewId}/edit`)
    }

    return (
        <>
        <h3>Profile Page</h3>
        <h3>Spots Currently Hosting</h3>
        <div>
            {UserSpots.map((spot)=>
                    <div key={spot.id} >
                        <h4 id='spotName'>{spot.name}</h4>
                        <p>User Name</p>
                        <p>Image</p>
                        <p>{spot.city}, {spot.country}</p>
                        <p>{spot.price}$ per night</p>
                        <p> {spot.avgRating}</p>
                    </div>
                )}
        </div>
        <div>
            <h3>Your Reviews</h3>
            {
                userReviews.map((review)=>(
                    <div key={review.id}>
                        <h4>{review.User.firstName}</h4>
                        <p>{review.stars} stars</p>
                        <p>{review.review}</p>
                        <button value={review.id} onClick={(e)=>handleEditReview(e.target.value)}>Edit Review</button>

                        <span><button onClick={()=>handleDeleteReview(review.id)}>Delete Review</button></span>
                    </div>
                ))
            }
        </div>
        </>
    )

}

export default ProfilePage
