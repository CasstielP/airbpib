import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom'

function LoginForm({onClose, setShowLogin}) {
  const dispatch = useDispatch();
  const history = useHistory()
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
    .then(()=>setShowLogin(false))
    .catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    )
    .then(()=> {
      history.push('/')
    })
  };

  return (
    <div calss='modalWrapper'>
    <form onSubmit={handleSubmit}>
      <div className="modal-header">Log in</div>
      <div className="errorList">
        {errors.length > 0 && errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}</div>
      <div className="inputField-wrapper">
        <label className="inputField">
        Username or Email
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required

        />
      </label>
      <div className="form-break"></div>
      <label className="inputField">
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      </div>
      <button type="submit" className="form-submitButton">Log In</button>
    </form>
</div>

  );
}

export default LoginForm;
