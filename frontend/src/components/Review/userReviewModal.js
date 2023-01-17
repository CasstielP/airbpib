import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Modal } from "../../context/Modal";
import * as reviewActions from '../../store/review'

const UserReviewModal = ({editRevModalObj, reviewId}) => {
    const history = useHistory()
    const dispatch = useDispatch()

    let {
        showEditReviewModal,
        setShowEditReviewModal,
        showEditRevConfir,
        setShowEditRevConfir
    } = editRevModalObj


    const handleDeleteReview = () => {
        dispatch(reviewActions.deleteReviewThunk(reviewId))
        setShowEditRevConfir(true)
    }

    return(
        <>
 {showEditReviewModal && (
        <Modal onClose={() => setShowEditReviewModal(false)}>
          <div className="cr_spt_modal_container">
            <div className="cr_spt_modal_wrapper">
              <div>
                <div className="cr_spt_modal_header">
                    Are you sure to delete this review?
                    </div>
                <div className="cr_spt_linebreak"></div>
                <div className="dlt_modal_btn_container">
                <button onClick={()=>setShowEditReviewModal(false)} className="dlt_modal_btn">cancel</button>
                <button onClick={handleDeleteReview} className="dlt_modal_btn">confirm</button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}

    {showEditRevConfir && (
        <Modal onClose={() => history.push('/user')}>
          <div className="cr_spt_modal_container">
            <div className="cr_spt_modal_wrapper">
              <div>
                <div className="cr_spt_modal_header">
                  Review Deleted successfully!
                </div>
                <div className="cr_spt_linebreak"></div>
              </div>
            </div>
          </div>
        </Modal>
      )}
        </>
    )
}


export default UserReviewModal
