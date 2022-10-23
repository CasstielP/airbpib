import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from '../SignupFormModal/SignupForm'


function SignupFormModal({showSignup, setShowSignup}) {


    return (
      <>
      {showSignup && (
        <Modal onClose={() => setShowSignup(false)}>
          <SignupForm
            setShowSignup={setShowSignup}/>
        </Modal>
      )}
    </>
    );
  }

  export default SignupFormModal;
