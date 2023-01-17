import React, { useState } from 'react';
import { Modal } from '../../context/Modal';

const DeleteSpotModal = ({showDeleteSpotModal, setShowDeleteSpotModal,showdltSpotError, setShowDltSpotError}) => {


    return (
        <>
        {
            showDeleteSpotModal &&
            <Modal
            onClose={()=> setShowDeleteSpotModal(false)}

            >
                 <div className='cr_spt_modal_container'>
                    <div className='cr_spt_modal_wrapper'>
                        <div>
                        <div className='cr_spt_modal_header'>
                            Spot Deleted successfully!
                        </div>
                      <div className='cr_spt_linebreak'></div>
                        </div>
                    </div>
                </div>


            </Modal>
        }

        {
            showdltSpotError &&
            <Modal
            onClose={()=> setShowDltSpotError(false)}

            >
            <div className='cr_spt_modal_container'>
            <div className='cr_spt_modal_wrapper'>
                <div>
                <div className='cr_spt_modal_header'>
                    Spot not found!
                </div>
              <div className='cr_spt_linebreak'></div>
                </div>
            </div>
        </div>

            </Modal>
        }
        </>
    )
}


export default DeleteSpotModal
