import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import UserReviews from '../Review/userReview';
import UserSpots from '../UserSpots';
const ProfilePage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const currentUser = useSelector(state=> state.session.user)
    const {username} = currentUser
    console.log(currentUser)

    return (

        <>
            <h2>Hi, {username}</h2>
            <UserSpots />
            <br></br>
            <br></br>
            <UserReviews />
        </>
    )

}

export default ProfilePage
