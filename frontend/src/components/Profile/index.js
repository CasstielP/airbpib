import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from 'react-router-dom';
import UserReviews from '../Review/userReview';
// import UserSpots from '../SpotList/userSpotPage';
import UserSpots from '../UserSpots'
import './profilePage.css'
import UserBookings from './userBooking';
const ProfilePage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const currentUser = useSelector(state=> state.session.user)
    const {username} = currentUser

    // if(!currentUser) return <Redirect to="/" />;

    return (

        <>
        <UserBookings />
        <h2 className='prp-header' id='prph'>Spots Currently Hosting</h2>
            {/* <div className='pr-allspots-container'> */}
            <UserSpots />
            {/* </div> */}
        <br></br>
        <div className='pr-linebreak-wrapper'>
        <div className='pr-linebreak'></div>
        </div>
        <h2 className='prp-header'>Your Reviews</h2>
        <div className="spot-review-container prp">
            <UserReviews />
        </div>
        </>
    )

}

export default ProfilePage
