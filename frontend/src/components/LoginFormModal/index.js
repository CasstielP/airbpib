import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import './LoginForm.css'
function LoginFormModal({showLogin,setShowLogin}) {


  return (
    <>
      {showLogin && (
        <Modal
        className="modal-wrapper"
        onClose={() => setShowLogin(false)}>
          <LoginForm
            setShowLogin={setShowLogin}
          />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
