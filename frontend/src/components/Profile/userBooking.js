import { NavLink, useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as bookingActions from '../../store/booking'
const UserBookings = () => {
    const dispatch = useDispatch()
    const bookings = useSelector(state=>state.booking.userBookings)
    const userBookingsArr = Object.values(bookings)
    useEffect(()=> {
        dispatch(bookingActions.fetchUserBookings())
    }, [])
    console.log(userBookingsArr[0])

    return (
        <>
        <div>
            <h2>Current Bookings</h2>
            {
                 userBookingsArr.map((booking)=>
                 <>
                 <div>{booking}</div>
                 </>
                 )
            }
        </div>
        </>
    )
}

export default UserBookings
