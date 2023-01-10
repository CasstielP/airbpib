import { NavLink, useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as bookingActions from '../../store/booking'
const UserBookings = () => {
    const dispatch = useDispatch()
    const userBookings = useSelector(state=>Object.values(state.booking.userBookings))

    useEffect(()=> {
        dispatch(bookingActions.fetchUserBookings())
    }, [])

    return (
        <>
        <div>
            <h2>Current Bookings</h2>
            {
                userBookings.map((booking)=>(
                    <div>booking.Spot.</div>
                ))
            }
        </div>
        </>
    )
}

export default UserBookings
