import React, { useState } from 'react';
import { Modal } from '../../context/Modal';

const CreateSpotModal = ({showCrtSpotModal, setShowCrtSpotModal}) => {


    return(
        <>
        {
            showCrtSpotModal &&
            <Modal
            onClose={()=> setShowCrtSpotModal(false)}
            >

            </Modal>
        }
        </>
    )
}


export default CreateSpotModal
