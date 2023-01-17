import { NavLink, useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as bookingActions from "../../store/booking";
// import PrUserBookings from "./userBookings";
const UserBookings = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.booking.userBookings);
  const bkArr = Object.values(bookings);
  useEffect(() => {
    dispatch(bookingActions.fetchUserBookings());
  }, []);
  console.log(bkArr[0]);

  return (
    <>
    {
      bookings.length > 0?
      <>
      <h2 className='cur_bk_header'>Current Bookings</h2>
      <div className="pr_bk_wrapper">
        {bkArr.map((booking) => (
          <>
            <div className="pr_bk_card">
            <div className="pr_bk_info">
                <div className="pr_bk_content" id="pr_bk_content_city">
                 {booking.Spot.city}
                </div>
                <div className="pr_bk_content" >{booking.Spot.name}</div>
                <div className="pr_bk_content">{booking.Spot.address}, {booking.Spot.state} {booking.Spot.country}</div>
                <div className="pr_bk_content" id="pr_bk_content_dates">
                  {new Date(booking.startDate).toLocaleDateString()} -{" "}
                  {new Date(booking.endDate).toLocaleDateString()}
                </div>
                <div className="pr_bk_content">Price Per Night: ${booking.Spot.price}</div>
              </div>
              <img
                className="bk_info_prev_img"
                src={booking.Spot.SpotImages[0].url}
              ></img>

            </div>
          </>
        ))}
      </div>
      </>
      :
      <>
      <div className="cur_bk_none">
      <h2 id='cur_bk_0header'>Current has no Bookings</h2>
      <div id='pr_bk_linebreak'></div>
      </div>
      </>
    }
    </>

  );
};

export default UserBookings;
