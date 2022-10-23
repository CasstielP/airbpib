import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import './SignupForm.css'

function SignupForm() {
  const dispatch = useDispatch();
//   const sessionUser = useSelector((state) => state.session.user);
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

//   if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ firstName,lastName, email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Password entered must be the same']);
  };

  return (
    <form onSubmit={handleSubmit}>
       <div className="modal-header">Sign Up</div>
          <div className="errorList">
          {errors.length > 0 && errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </div>

        <div className="inputField-wrapper">
        <label className="inputField">
        First Name
        <input
          type="text"
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
          required
        />
      </label>
      <div className="form-break"></div>
      <label className="inputField">
        Last Name
        <input
          type="text"
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
          required
        />
      </label>
      <div className="form-break"></div>
      <label className="inputField">
        Email
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <div className="form-break"></div>
      <label className="inputField">
        Username
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
      <div className="form-break"></div>
      <label className="inputField">
        Confirm Password
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>
      </div>
      <button className="form-submitButton" type="submit">Sign Up</button>
    </form>
  );
}

export default SignupForm;
