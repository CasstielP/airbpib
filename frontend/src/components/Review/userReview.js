import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as reviewActions from '../../store/review'
import { useEffect, useState } from 'react'
import './review.css'
import UserReviewModal from './userReviewModal'



const UserReviews = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const userReviews = useSelector(state=> Object.values(state.review.userReviews))
    const [showEditReviewModal, setShowEditReviewModal] = useState(false)
    const [showEditRevConfir, setShowEditRevConfir] = useState(false)

    const editRevModalObj = {
      showEditReviewModal,
      setShowEditReviewModal,
      showEditRevConfir,
      setShowEditRevConfir
    }

    useEffect(() => {
        dispatch(reviewActions.getUserReviews())
    }, [])

    const handleDeleteReview = (reviewId) => {
      setShowEditReviewModal(true)
    }


    return (


        <>
        {/* <h2>Your Reivews</h2> */}
        {
          userReviews.map((review) => (
            <>
            <div className="single-review">

              {/* <h3>{review.User.firstName}{" "}{review.User.lastName}</h3> */}
              <div className='usr_rev_head_wrapper'>
              <div>
              <p className="single-review-stars">
                {review.stars} ★
              </p>
              <div id='rev_date'>{(new Date(review.createdAt)).toLocaleDateString() }</div>
              <p className="single-review-content">
                <span  className="rev_content">
                  "{review.review}"
                </span>
              </p>
              </div>
              <div>
              </div>
              </div>
              <div>
                {
                  review.ReviewImages &&
                  review.ReviewImages.map((image) => {
                    return (
                      <img
                      className="single-review-image"
                      src={image.url} />
                      )
                    })
                  }
              </div>
                  <button className='rv-submit-button' onClick={()=>handleDeleteReview(review.id)} >Delete Review</button>
            </div>
            <UserReviewModal editRevModalObj={editRevModalObj} reviewId={review.id}/>
            </>

          ))
        }
        </>













        // <div>
        //     <div>
        //         <div>
        //             {userReviews.map((review)=> (
        //                 <div key={review.id}>
        //                     <div>{review.User.firstName}</div>
        //                     <div>{review.stars}⭐</div>
        //                     <div>{review.review}</div>
        //                     <button onClick={()=>handleDeleteReview(review.id)} >Delete Review</button>
        //                 </div>
        //             ))
        //             }
        //         </div>
        //     </div>
        // </div>
    )


}
export default UserReviews
