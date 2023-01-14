import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import BookingConfirmation from './bookingConfirmation';

const BkComfirmationModal = ({showBkConfirmation, setShowBkConfirmation}) => {

    return (
        <>
        {
            showBkConfirmation &&
        <Modal
            onClose={()=> setShowBkConfirmation(false)}
        >
            <BookingConfirmation setShowBkConfirmation={setShowBkConfirmation} />




        </Modal>

        }
        </>
    )
}

export default BkComfirmationModal
