import React, {useState} from 'react';
import { NavLink, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';
import VisitorProfileButton from './VisitorProfileButton';
import logo from './logov2.png'


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      <ProfileButton user={sessionUser} />
      {/* <NavLink style={{ textDecoration: "none", color: "black" }} to='/newspot'>Create Spot</NavLink> */}
      </>
    );
  } else {
    sessionLinks = (
      <VisitorProfileButton
      setShowLogin={setShowLogin}
      setShowSignup={setShowSignup}
      // <>
      //   <LoginFormModal />
      //   <SignupFormModal />
      // </>
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

      <div className="sessionlinks">
        {sessionLinks}
      </div>
    <div className="headerbreak"></div>
  </div>
  )
//     <>
//     <div>
//         <div> {isLoaded && sessionLinks}</div>
//         <NavLink exact to="/">Home</NavLink>
// </div>
//     </>
}

export default Navigation;
