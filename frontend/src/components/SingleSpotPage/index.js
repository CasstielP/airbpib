import { useSelector, useDispatch } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { useParams, useHistory, NavLink, Link } from "react-router-dom";
import { getOneSpot } from '../../store/spot'
import DeleteSpotForm from "../DeleteSpot";
import { loadAllReviews, createReview } from '../../store/review'
import ReviewPortion from "../Review";
import CreateReviewModal from '../CreateReview/reviewModal'
import genericPic from './yuccavalley.png'
import './singleSpot.css'
import * as spotActions from '../../store/spot'
import * as reviewActions from '../../store/review'
import * as bookingActions from '../../store/booking'
import countertop from './countertops.png'
import badge from './badge.png'
import key from './key.png'
import aircover from './aircover.png'

const SpotDetail = () => {
  const { spotId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  let isOwner = false
  const currentSpot = useSelector(state => state.spot.singleSpot)
  const currentUser = useSelector(state => state.session.user)
  const spotReviews = useSelector(state => Object.values(state.review.spotReviews))
  const currentBookings = useSelector(state => state.booking.allBookings)
  // console.log(currentBookings)
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [guestNum, setGuestNum] = useState(1)
  const [errors, setErrors] = useState([])
  const [bkPrice, setBkPrice] = useState(0)


  let days = (new Date(endDate) - new Date(startDate))/1000/60/60/24
  console.log('daysNunmdaysNunmdaysNunmdaysNunmdaysNunm',  days)
  let totalPrice=0;
  let cleaningFee = 125
  let serviceFee = 200
  let finalPrice=0;
  if (days>0) {
    totalPrice = currentSpot.price * days;
    finalPrice = totalPrice + cleaningFee + serviceFee
  }


  if (currentUser?.id === currentSpot.ownerId) isOwner = true

  const handleEditSpotOnclick = async () => {
    history.push(`/spots/${spotId}/edit`)
  }

  const handleDeleteSpot = () => {
    if (window.confirm("are you sure you want to delete this spot?")) {
      dispatch(spotActions.deleteSpotThunk(spotId))
        .then(() => {
          history.push("/user")
          alert('Spot Deleted Successfully!')
        })
    }
  }


  useEffect(() => {
    dispatch(getOneSpot(spotId))
    dispatch(reviewActions.loadAllReviews(spotId))
    dispatch(bookingActions.fetchAllBookings(spotId))
  }, [dispatch, spotId])


  const handleBooking = (e) => {
    e.preventDefault()
    let Errors = []
    if(!startDate || !endDate){
      setErrors(['Must enter valid dates'])
    }
    else{
      const payload = {
        startDate,
        endDate
      }
      return dispatch(bookingActions.createBookingThunk(spotId, payload))
      .catch(async(res)=> {
        const data = await res.json()
        if(data.statusCode >= 400){
          setErrors([data.message])
        }
      })
    }
  }

  return (
    <>
      <div className="singleSpot-Container">
        <div className="singleSpot-Header">
          <div className="singleSpot-Header-name">
            <h1>{currentSpot.name}</h1>
          </div>
          <div className="singleSpot-Header-detail">
            {currentSpot.avgRating ?
              (<span>★ {currentSpot.avgRating}  ·  </span>) :
              (<span>★ New  ·  </span>)
            }
            <span>{spotReviews.length} reviews   ·  </span>
            <span>{currentSpot.city}, {currentSpot.state}, {currentSpot.country}</span>
            {/* <span>Entire Spot hosted by {currentSpot?.Owner?.firstName}  ·  </span> */}
          </div>
        </div>

        <div className="singleSpot-imgContainer">
          <div>
            <img className="mainSpot-img" src={currentSpot?.SpotImages?.[0]?.url} />
          </div>

          <div className="subImg-container">
            <img className="subspot-image" src={currentSpot?.SpotImages?.[1]?.url} />
            <img className="subspot-image" src={currentSpot?.SpotImages?.[2]?.url} />
            <img className="subspot-image" src={currentSpot?.SpotImages?.[3]?.url} />
            <img className="subspot-image" src={currentSpot?.SpotImages?.[4]?.url} />
          </div>
        </div>
        <div className="singleSpot-Container-Bot">
          <div className="below-spotImg">
            <h2>Entire spot Hosted by {currentSpot?.Owner?.firstName}</h2>
          </div>
          <div className="spot-linebreak"></div>
          <div className="spot-detail">
            {/* <p>{currentSpot.description}</p> */}
          <div className="sig_spot_linebreak"></div>
          <div className="spot_badge_info">
            <div className="spt_badge_info_wrapper">
              <img className="spt_badge_icon" src={countertop} />
              <div>
                <div className="spt_badge_headline">Dedicated workspace</div>
                <div className="spt_badge_desc">A private room with wifi that’s well-suited for working.</div>
              </div>
            </div>
            <div className="spt_badge_info_wrapper">
              <img className="spt_badge_icon" src={badge} />
              <div>
                <div  className="spt_badge_headline">{currentSpot.Owner?.firstName} is a Superhost</div>
                <div  className="spt_badge_desc">A private room with wifi that’s well-suited for working.</div>
              </div>
            </div>
            <div  className="spt_badge_info_wrapper">
              <img className="spt_badge_icon" src={key} />
              <div>
              <div  className="spt_badge_headline">
              Great check-in experience
              </div>
              <div>
                <div  className="spt_badge_desc">100% of recent guests gave the check-in process a 5-star rating.</div>
              </div>
              </div>
            </div>
          </div>
          <div className="sig_spot_linebreak-btm"></div>
          <div className="aircover">
            <img id='aircoverpic' src={aircover} />
            <div id='aircovertext'>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</div>
          </div>
          <div className="sig_spot_linebreak-btm"></div>
            <div className="spot_desc">
              <div id='spot_desc_text'>{currentSpot.description}</div>
            </div>

          </div>



          <div className="price-rating-container">
            <div className="errorList">
              {
                errors &&
                errors.map((error) => <div key={error}>{error}</div>)}
            </div>
            <div className="prc-header">
              <div>
                <span className="one-spot-price">${currentSpot.price}</span> <span id='bk-price'>night</span>
              </div>
              <div id='bk-topright'>
                <div className="pr-review">
                  <span>
                    {currentSpot.avgRating ?
                      (<span className="bold bk-tr-star">★ {currentSpot.avgRating}</span>) :
                      (<span className="bold bk-tr-star">★ New</span>)
                    }
                  </span>
                  <span id='bk-rev-num'>· {spotReviews.length} reviews</span>
                </div>
              </div>
            </div>
            <form className="bk-form" onSubmit={handleBooking}>
              <div className="ckin-out">
              <div className="ckin">
                <label className="booking-label">CHECK-IN</label>
                <input
                  type='date'
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                ></input>
              </div>
              <div className="ckout">
                <label className="booking-label">CHECK-OUT</label>
                <input
                  type='date'
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                ></input>
              </div>
              </div>
              <div id='ck-guest'>
                <label>Guest</label>
                <select
                value={guestNum}
                onChange={(e)=> setGuestNum(e.target.value)}
                >
                  <option value='1'>1 guest</option>
                  <option value='2'>2 guests</option>
                  <option value='3'>3 guests</option>
                  <option value='4'>4 guests</option>
                  <option value='5'>5 guests</option>
                  <option value='6'>6 guests</option>
                </select>
              </div>
              <button id='bk-btn' type='submit'>Reserve</button>
              <div id='bk_fine_text'>you won't be charged yet</div>
              <div className="bk_fee_item">
              <div className="bk_fees">${currentSpot.price} x {days} nights</div>
              <div className="bk_fee_misc_price">${currentSpot.price * days}</div>
              </div>
              <div className="bk_fee_item">
              <div className="bk_fees">Cleaning fee</div>
              <div className="bk_fee_misc_price">$125</div>
              </div>
              <div className="bk_fee_item">
              <div className="bk_fees">Service fee</div>
              <div className="bk_fee_misc_price">$200</div>
              </div>
              <div className="linebreak"></div>

              <div className="bk_total_price">
              <div id='bk-total'>Total price before taxes: </div>
              <div id='bk-total'>
              ${finalPrice}
              </div>
              </div>
            </form>
          </div>
        </div>
        <div>
          {
            isOwner &&
            <button className="pr-submit-button" onClick={handleEditSpotOnclick} >Edit Spot</button>
          }
        </div>
        <div>
          {
            isOwner &&
            <button className="pr-submit-button" onClick={handleDeleteSpot} >Delete Spot</button>
          }
        </div>
        <div className="spot-linebreak long"></div>


        <h2 className="reviewHeader-container">
          <span>
            {currentSpot.avgRating ?
              (<span className="bold">★ {currentSpot.avgRating}  ·   </span>) :
              (<span className="bold">★ New  ·   </span>)
            }
          </span>
          <span>Reviews</span>
        </h2>



        <div>
          {
            currentUser &&
            !isOwner &&
            <CreateReviewModal spotId={spotId} />
          }
        </div>


        <div className="spot-review-container">
          <ReviewPortion spotReviews={spotReviews} />
        </div>
      </div>

    </>
  )
}
export default SpotDetail;
