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
                <div className='cr_spt_modal_container'>
                    <div className='cr_spt_modal_wrapper'>
                        <div>
                        Thank you for hosting your spot!
                        </div>
                    </div>
                </div>
            </Modal>
        }
        </>
    )
}


export default CreateSpotModal
