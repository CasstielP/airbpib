import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import * as spotActions from "../../store/spot";
import {getOneSpot} from '../../store/spot'
import './editSpot.css'
import EditSpotConfirmationModal from "./editSpotComfirModal";
function EditSpotPage() {
  const dispatch = useDispatch();
  const {spotId} = useParams();
  // console.log(spotId)
  const currentSpot = useSelector(state=>state.spot.singleSpot)
  console.log(currentSpot)
  const currentSpotOwner = useSelector((state)=> state.session.user)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  const [showEditSptModal, setShowEditSptModal] = useState(true)


  useEffect(() => {
    if(currentSpot){
      setAddress(currentSpot.address)
      setCity(currentSpot.city)
      setState(currentSpot.state)
      setCountry(currentSpot.country)
      setLat(currentSpot.lat)
      setLng(currentSpot.lng)
      setName(currentSpot.name)
      setDescription(currentSpot.description)
      setPrice(currentSpot.price)
    }
}, [currentSpot])


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    setIsSubmitted(true)
    let Errors = []

    if (!address.length) Errors.push("address must not be empty")
    if (!city.length) Errors.push("city must not be empty")
    if (!state.length) Errors.push("state must not be empty")
    if (!country.length) Errors.push("country must not be empty")
    if (!name.length ) Errors.push("please enter a valid name")
    if (!description.length) Errors.push("please enter a valid description")
    if (!price || price <=0) Errors.push("please enter a valid price")
    setErrors(Errors)


    const editSpot = {
      address,
      city,
      state,
      country,
      lat,
      lng,
      name,
      description,
      price,
    };

    dispatch(spotActions.editSpotThunk(editSpot, spotId))
    .then(()=>{
        setShowEditSptModal(true)
      })
  }


  return (
    <>
      <div className="ns-container">
    <div className="ns-header-container">
      <h3 className="edit_spot_header">Edit Your Spot</h3>
      <div className="errorList">
          {
            isSubmitted &&
          errors?.map((error)=>(<div key={error}>{error}</div>))
          }
        </div>
      <div className="input-container inputField-wrapper">
      <form onSubmit={handleSubmit}>
        <label>
          address
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <div className="form-break"></div>
        <label>
          city
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <div className="form-break"></div>
        <label>
          state
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </label>
        <div className="form-break"></div>
        <label>
          country
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>
        <div className="form-break"></div>
        <label>
          latitude
          <input
            type="number"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
          />
        </label>
        <div className="form-break"></div>
        <label>
          longtitude
          <input
            type="number"
            value={lng}
            onChange={(e) => setLng(e.target.value)}
          />
        </label>
        <div className="form-break"></div>
        <label>
          spot Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <div className="form-break"></div>
        <label>
          description
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <div className="form-break"></div>
        <label>
          price
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <button className="submit-button" type="submit">Submit</button>
      </form>
      </div>
      </div>
      </div>
      <EditSpotConfirmationModal showEditSptModal={showEditSptModal} setShowEditSptModal={setShowEditSptModal}/>
    </>
  );
}


export default EditSpotPage;
