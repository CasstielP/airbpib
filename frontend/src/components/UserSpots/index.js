import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import { ModalContext } from "../../context/Modal";
import * as spotActions from "../../store/spot";
import EditSpotModal from "../EditSpot/editSpotModal";
import EditSpotPage from "../EditSpot";
import "../Profile/profilePage.css";
const UserSpots = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const { setModalType } = useContext(ModalContext);
  const spots = useSelector((state) => Object.values(state.spot.allSpots));
  const ownedSpots = spots?.filter((spot) => spot.ownerId === user.id);

  useEffect(() => {
    dispatch(spotActions.fetchSpots());
  }, []);

  if (!user) return <Redirect to="/" />;

  const handleDeleteSpot = (spotId) => {
    if (window.confirm("are you sure you want to delete this spot?")) {
      dispatch(spotActions.deleteSpotThunk(spotId)).then(() => {
        history.push("/user");
        alert("Spot Deleted Successfully!");
      });
    }
  };

  // const handleEditSpotOnclick = async (spotId) => {
  //     // dispatch(spotActions.getOneSpot(spotId))
  //     history.push(`/spots/${spotId}/edit`)
  // }

  return (
    <>
      {/* <h2>Spots Currently Hosting</h2> */}
      <div className="pr-allspots-container">
        {ownedSpots.map((spot) => (
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/spots/${spot.id}`}
          >
            <div className="spotCard-box">
              <img src={spot.previewImage} className="preview-img" />
              <div className="spotcard-content">
                <div className="spc-info-left">
                <div className="bold">
                  {spot.city}, {spot.state}
                </div>
                <div>
                  <span className="bold">${spot.price}</span> night
                </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default UserSpots;
