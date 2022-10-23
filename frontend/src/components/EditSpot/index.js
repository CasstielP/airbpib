import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import * as spotActions from "../../store/spot";
import {getOneSpot} from '../../store/spot'

function EditSpotPage() {
  const dispatch = useDispatch();
  const {spotId} = useParams();
  // console.log(spotId)
  const currentSpot = useSelector(state=>state.spot.singleSpot)
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

  useEffect(() => {
    setAddress(currentSpot.address)
    setCity(currentSpot.city)
    setState(currentSpot.state)
    setCountry(currentSpot.country)
    setLat(currentSpot.lat)
    setLng(currentSpot.lng)
    setName(currentSpot.name)
    setDescription(currentSpot.description)
    setPrice(currentSpot.price)
}, [])


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
        alert('Sccessully Edited Spot')
        history.push('/user')
      })
  }


  return (
    <>
      <h3>Spot Name</h3>
      <form onSubmit={handleSubmit}>
      <div>
          {
          isSubmitted &&
          errors?.map((error)=>(<div key={error}>{error}</div>))
          }
        </div>
        <label>
          address
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <label>
          city
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <label>
          state
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </label>
        <label>
          country
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>
        <label>
          latitude
          <input
            type="number"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
          />
        </label>
        <label>
          longtitude
          <input
            type="number"
            value={lng}
            onChange={(e) => setLng(e.target.value)}
          />
        </label>
        <label>
          spot Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          description
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          price
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}


export default EditSpotPage;
