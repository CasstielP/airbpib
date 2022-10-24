import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import DemoUser from "../DemoUser";
function HomePageButton ({setShowLogin, setShowSignup}) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
      if (showMenu) return;
      setShowMenu(true);
    };

    useEffect(() => {
      if (!showMenu) return;

      const closeMenu = () => {
        setShowMenu(false);
      };

      document.addEventListener('click', closeMenu);

      return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    return (
        <>

      <div className="wrapper">

        <button onClick={openMenu} className="pfbutton">
            <span className="material-symbols-outlined">menu</span>
            <span>  </span>
            <span className="material-symbols-outlined">account_circle</span>
        </button>

        {
          showMenu && (

          <div className="dropdownMenulogin">

            <div className="loginselect">
              <div className="login-button"
              onClick={() => setShowLogin(true)}>
                Log In
              </div>
            </div>

            <div className="loginselect">
              <div className="signup-button"
              onClick={() => setShowSignup(true)}>
                Sign Up
              </div>

            </div>

            <div className="loginselect">
              <DemoUser />
            </div>
          </div>

        )}

      </div>
    </>

      );


}

export default HomePageButton;
