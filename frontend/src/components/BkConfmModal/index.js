import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import BookingConfirmation from './bookingConfirmation';

const BkComfirmationModal = ({showBkConfirmation, setShowBkConfirmation}) => {
    const history = useHistory()
    return (
        <>
        {
            showBkConfirmation &&
        <Modal
            onClose={()=> history.push('/user')}
        >
            <BookingConfirmation setShowBkConfirmation={setShowBkConfirmation} />
        </Modal>

        }
        </>
    )
}

export default BkComfirmationModal
