import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';
import CreateSpotFormPage from '../CreateSpot';


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const spotButton = (e) => {

  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      <ProfileButton user={sessionUser} />
      {/* <Route><CreateSpotFormPage /></Route> */}
      {/* <button onClick={spotButton} >Create Spot</button> */}
      <NavLink to='/newspot'>Create Spot</NavLink>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
      </>
    );
  }

  return (
    <>
    <ul>
      <li>
        <NavLink exact to="/">Home</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>

    </>
  );
}

export default Navigation;
