import {Modal} from '../../context/Modal'
import CreateReview from '.'
import React, {useState} from 'react'

const CreateReviewModal = ({spotId}) => {
    const [showModal, setShowModal] = useState(false)


    return (
        <>
        <button onClick={() => setShowModal(true)}>
        Create Review
        </button>


        {showModal && (
        <Modal onClose={() => setShowModal(false)}>

          <CreateReview
          onCreation={() => setShowModal(false)}
          spotId={spotId}
          setShowModal={setShowModal}
          />

        </Modal>
             )}


        </>
    )


}


export default CreateReviewModal
