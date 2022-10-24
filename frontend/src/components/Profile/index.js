import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import UserReviews from '../Review/userReview';
// import UserSpots from '../SpotList/userSpotPage';
import UserSpots from '../UserSpots'
import './profilePage.css'
const ProfilePage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const currentUser = useSelector(state=> state.session.user)
    const {username} = currentUser
    console.log(currentUser)

    return (

        <>
        <h2>Spots Currently Hosting</h2>
            {/* <div className='pr-allspots-container'> */}
            <UserSpots />
            {/* </div> */}
            <br></br>
            <br></br>
        <h2>Your Reviews</h2>
        <div className="spot-review-container">
            <UserReviews />
        </div>
        </>
    )

}

export default ProfilePage
