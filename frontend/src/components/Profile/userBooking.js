import { NavLink, useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as bookingActions from '../../store/booking'
import PrUserBookings from "./userBookings";
const UserBookings = () => {
    const dispatch = useDispatch()
    const bookings = useSelector(state=>state.booking.userBookings)
    const bkArr = Object.values(bookings)
    useEffect(()=> {
        dispatch(bookingActions.fetchUserBookings())
    }, [])
    console.log(bkArr[0])

    return (
        <>
        <h2>Current Bookings</h2>
        <div className="pr_bk_wrapper">
            {
                 bkArr.map((booking)=>
                 (
                    <>
                        <div className="pr_bk_card">
                        <img className="bk_info_prev_img" src={booking.Spot.SpotImages[0].url}></img>
                        <div>{booking.Spot.city}</div>
                        <div>{new Date(booking.startDate).toLocaleDateString()} - {new Date(booking.endDate).toLocaleDateString()}</div>
                        {/* <div>{booking.Spot}</div> */}
                        </div>
                    </>
                 ))
            }
        </div>
        </>
    )
}

export default UserBookings
