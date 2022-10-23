import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';
import logo from './logov2.png'
import HomePageButton from './HomePageButton';
import './Navigation.css'

function Navigation(){
  const sessionUser = useSelector(state => state.session.user);
  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <HomePageButton
      setShowLogin={setShowLogin}
      setShowSignup={setShowSignup}
      />
    );
  }

  return (
    <div>

    <LoginFormModal
      showLogin={showLogin}
      setShowLogin={setShowLogin}
    />

    <SignupFormModal
      showSignup={showSignup}
      setShowSignup={setShowSignup}
    />

    <NavLink exact to="/">
      <img className="logo" src={logo} />
    </NavLink>

      <div className="sessionlink">
        {sessionLinks}
      </div>
    <div className="headerLine"></div>
  </div>
  )
}

export default Navigation;
