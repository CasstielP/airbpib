// import { csrfFetch } from "./csrf";

// const LOAD_REVIEWS = 'reviews/getAll'
// const CREATE_REVIEW = 'revews/createNew'
// const ADD_REVIEW = 'reviews/addReviews'
// const EDIT_REVIEW = 'reviews/edit'
// const DELETE_REVIEW = 'reviews/delete'

// //action creators
// const loadReviews = (reviews) => {
//     return {
//         type: LOAD_REVIEWS,
//         reviews
//     }
// }


// //thunks
// export const loadAllReviews = (spotId)=> async (dispatch) => {
//     const response = await csrfFetch(`/api/spots/${spotId}/reviews`)
//     if(response.ok) {
//         const userReviews = await response.json()
//         dispatch(loadReviews(userReviews))
//         return userReviews
//     }
//     else return null;
// }



// //review reducer
// const initialState = {}

// const reviewReducer = (state = initialState, action ) => {
//     let newReviews = {};
//     switch (action.type) {
//         case LOAD_REVIEWS:
//         action.reviews.Reviews.forEach(review=> {
//             newReviews[review.id] = review
//         })
//         return newReviews






//         default:
//         return state;
//     }








// }

// export default reviewReducer
