import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import * as spotActions from '../../store/spot'
import {useHistory} from 'react-router-dom'

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory()
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {

  }, [user])


  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
  };

  const  profilePage = () => {
    history.push('/user')
  }

  const UserSpotsPage = () => {
    history.push('/spots/user')
  }


  return (
    <>
      <div className="wrapper">

      <button onClick={openMenu} className="pfbutton">
      <span className="material-symbols-outlined">menu</span>
            <span>  </span>
            <span className="material-symbols-outlined">manage_accounts</span>
      </button>

{
  showMenu && (

  <div className="pfdropdownMenulogin">

    <div className="currentuser-wrapper">
      <div className="currentuser">{user.username}</div>
      <div className="currentuser">{user.email}</div>
    </div>

    <div className='middleline'></div>

    <div className="menu-select">
      <div onClick={()=>history.push('/newspot')}>Host your Spot</div>
    </div>

    <div className="menu-select">
      <div onClick={()=>history.push('/user')}>Profile</div>
    </div>

    <div className="menu-select">
      <div onClick={logout}>Log Out</div>
    </div>


  </div>

)}

</div>
  </>
  );
}

export default ProfileButton;
