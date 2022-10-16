import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';

function HomePageButtom () {
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
          <button onClick={openMenu}>
            <i className="fas fa-user-circle" />
          </button>
          {showMenu && (
            // <ul className="profile-dropdown">
            //     <li><LoginFormModal /></li>
            //     <li><SignupFormModal/></li>
            // </ul>
            <LoginFormModal />
          )}
        </>
      );


}

export default HomePageButtom;
