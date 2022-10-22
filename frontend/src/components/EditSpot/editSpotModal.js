import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditSpotPage from '.';


const EditSpotModal = ({spot}) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
        <button onClick={()=>setShowModal(true)}>
            Edit Spot
        </button>
        {
            showModal && (
                <Modal onClose={() => setShowModal(false)} spot={spot}>
                    <EditSpotPage  />
                </Modal>
            )
        }
        </>
    )
}


export default EditSpotModal;
