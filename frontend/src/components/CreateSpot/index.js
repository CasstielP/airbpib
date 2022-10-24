import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import * as spotActions from "../../store/spot";
import './newSpot.css'
function CreateSpotFormPage() {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user);
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [lat, setLat] = useState('')
    const [lng, setLng] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image , setImage] = useState('')
    const [errors, setErrors] = useState([]);
    const history = useHistory()
    const [isSubmitted, setIsSubmitted] = useState(false)

const handleSubmit = (e)  => {
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
    // if (!image.length || !image.includes(".jpg"||".jpeg"||".png"||".gif")) Errors.push("please enter a valid image url")
    setErrors(Errors)


    const payload = {
        address, city, state, country, lat, lng, name, description, price
    }

    const imageData = {url: image, preview: true}



    dispatch(spotActions.createSpot(payload))
        .then((response)=> {
          dispatch(spotActions.createSpotImage(imageData, response.id))
          alert('Sccessully Created New Spot')
        })
        .then(()=>{

            history.push('/')
          })
}

const handleCancel = (e) => {
  e.preventDefault()
  history.push('/')
}

return (
  <div className="ns-container">
   <div className="ns-header-container">
    <h2>Host your Spot!</h2>
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
              <div className="form-break"></div>
              <label>
                Image URL:
                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder='add image here'
                  required
                />
              </label>
              <button className="submit-button" type="submit">Create</button>
              <button className="submit-button" onClick={handleCancel}>Cancel</button>
            </form>
    </div>
    </div>
    </div>
)
}

export default CreateSpotFormPage;
