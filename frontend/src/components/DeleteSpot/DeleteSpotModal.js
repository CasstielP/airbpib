import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Modal } from "../../context/Modal";
import './deleteSpot.css'
import * as spotActions from '../../store/spot'
const DeleteSpotModal = ({ deleteSpotObj }) => {
    const history = useHistory()
    const dispatch = useDispatch()
  let {
    showDeleteSpotModal,
    setShowDeleteSpotModal,
    showdltSpotError,
    setShowDltSpotError,
    showDltConfirmation,
    setShowDltConfirmation,
    spotId
  } = deleteSpotObj;

  const handleDeleteSpot = () => {
    setShowDeleteSpotModal(false)
      dispatch(spotActions.deleteSpotThunk(spotId)).then(() => {
        setShowDltConfirmation(true)
        // .then(()=> {
        //     history.push('/user')
        // })
      });

  };

  return (
    <>
      {showDltConfirmation && (
        <Modal onClose={() => history.push('/user')}>
          <div className="cr_spt_modal_container">
            <div className="cr_spt_modal_wrapper">
              <div>
                <div className="cr_spt_modal_header">
                  Spot Deleted successfully!
                </div>
                <div className="cr_spt_linebreak"></div>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {showdltSpotError && (
        <Modal onClose={() => setShowDltSpotError(false)}>
          <div className="cr_spt_modal_container">
            <div className="cr_spt_modal_wrapper">
              <div>
                <div className="cr_spt_modal_header">Spot not found!</div>
                <div className="cr_spt_linebreak"></div>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {showDeleteSpotModal && (
        <Modal onClose={() => setShowDeleteSpotModal(false)}>
          <div className="cr_spt_modal_container">
            <div className="cr_spt_modal_wrapper">
              <div>
                <div className="cr_spt_modal_header">
                    Are you sure to delete this spot?
                    </div>
                <div className="cr_spt_linebreak"></div>
                <div className="dlt_modal_btn_container">
                <button onClick={()=>setShowDeleteSpotModal(false)} className="dlt_modal_btn">cancel</button>
                <button onClick={handleDeleteSpot} className="dlt_modal_btn">confirm</button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default DeleteSpotModal;
