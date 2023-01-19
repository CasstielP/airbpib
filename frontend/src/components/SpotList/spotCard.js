import { Link } from "react-router-dom";
import defaultPic from '../SingleSpotPage/yuccavalley.png'
const SpotCard = ({ spot }) => {
  return (
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to={`/spots/${spot.id}`}
    >
      <div className="spotCard-box">
        <img
        onError={(e)=> e.currentTarget.src = defaultPic}
        src={spot.previewImage}
        className="preview-img" />
        <div className="spotcard-content">
          <div className="spc-info-left">
            <div className="bold">
              {spot.city}, {spot.state}
            </div>
            <div id='spot-country'>{spot.country}</div>
            <div></div>
            <div>
              <span className="bold">${spot.price}</span> night
            </div>
          </div>
            <div id='spotCard_star'>
            {spot.avgRating ? (
              <span>★{spot.avgRating}</span>
            ) : (
              <span>★New</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SpotCard;
