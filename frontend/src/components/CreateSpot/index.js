import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import * as spotActions from "../../store/spot";

function CreateSpotFormPage() {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user);
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [lat, setLat] = useState('')
    const [lng, setLng] = useState('')
    const [spotName, setspotName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [errors, setErrors] = useState([]);
    const history = useHistory()


const handleSubmit = (e) => {
    e.preventDefault();
    console.log('testing')
    setErrors([]);
     const testing = dispatch(spotActions.createSpot({
        address, city, state, country, lat, lng, spotName, description, price
    }))
    if(testing) {
        history.push('/')
    }
    // .catch(async (res) => {
    //     const data = await res.json();
    //     if (data && data.errors) setErrors(data.errors);
    // });
    // .then((console.log('version1'))
}


return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <label>
        address
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </label>
      <label>
        city
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </label>
      <label>
        state
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
      </label>
      <label>
        country
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
      </label>
      <label>
        latitude
        <input
          type="number"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
          required
        />
      </label>
      <label>
        longtitude
        <input
          type="number"
          value={lng}
          onChange={(e) => setLng(e.target.value)}
          required
        />
      </label>
      <label>
      spot Name
        <input
          type="text"
          value={spotName}
          onChange={(e) => setspotName(e.target.value)}
          required
        />
      </label>
      <label>
        description
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <label>
        price
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </label>
      <button type="submit">Create</button>
    </form>
)
}

export default CreateSpotFormPage;
