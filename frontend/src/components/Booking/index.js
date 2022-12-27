import { useSelector, useDispatch } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { useParams, useHistory, NavLink, Link } from "react-router-dom";

const Booking = () => {
    return (
        <div className="price-rating-container">
        <div className="prc-header">
          <div>
            <span className="one-spot-price">${currentSpot.price}</span> night
          </div>
        <div className="pr-review">
              <span>
              {currentSpot.avgRating ?
                (<span className="bold">★ {currentSpot.avgRating}</span>):
                (<span className="bold">★ New</span>)
              }
              </span>
          </div>
        </div>
      </div>
    )
}

export default Booking
