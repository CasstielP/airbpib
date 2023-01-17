import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Modal } from "../../context/Modal";

const EditSpotConfirmationModal = ({showEditSptModal, setShowEditSptModal}) => {
    const history = useHistory()

    return(
        <>
        { showEditSptModal &&
        <Modal
        onClose={()=> history.push('/')}
        >
          <div className="cr_spt_modal_container">
            <div className="cr_spt_modal_wrapper">
              <div>
                <div className="cr_spt_modal_header">Spot Edited Successfully!</div>
                <div className="cr_spt_linebreak"></div>
              </div>
            </div>
          </div>
        </Modal>
        }
        </>
    )
}

export default EditSpotConfirmationModal
