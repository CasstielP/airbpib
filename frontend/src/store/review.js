import { csrfFetch } from "./csrf";

const LOAD_REVIEWS = 'reviews/getAll'
const LOAD_USER_REVIEW = 'reviews/user'
const ADD_REVIEW = 'reviews/addReviews'
const EDIT_REVIEW = 'reviews/edit'
const DELETE_REVIEW = 'reviews/delete'

//action creators
const loadReviews = (reviews) => {
    return {
        type: LOAD_REVIEWS,
        reviews
    }
}

const loaUserReviews = (reviews) => {
    return {
        type: LOAD_USER_REVIEW,
        reviews
    }
}

const addReviews = (review)=> {
    return{
    type: ADD_REVIEW,
    review
}}

const editReviews = (review) => {
    return {
        type: EDIT_REVIEW,
        review
    }
}


const deleteReview = (reviewId) => {
    return {
        type: DELETE_REVIEW,
        reviewId
    }
}


//thunks
export const loadAllReviews = (spotId)=> async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}/reviews`)
    if(response.ok) {
        const spotReviews = await response.json()
        const spotReviewsArr = spotReviews.Reviews
        dispatch(loadReviews(spotReviewsArr))
        return spotReviews
    }
}

//thunk get user's reviews
export const getUserReviews = ()=> async (dispatch) =>{
    const response = await csrfFetch(`api/reviews/current`)
    if(response.ok) {
        const userReviews = await response.json()
        const  userReviewsArr = userReviews.Reviews
        dispatch(loaUserReviews(userReviewsArr))
        return userReviews
    }
}



//thunk add new review
export const createReview = (spotId, payload) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(payload)
    })
    if(response.ok) {
        const newReview = await response.json()
        dispatch(addReviews(newReview))
        return newReview
    }
}



//thunk edit reviews
// export const editReviewsThunk =  (payload, reviewId) => async dispatch => {
//     const response  = await csrfFetch(`/api/reviews/${reviewId}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload)
//     })
//     if(response.ok) {
//         const editedReview = await response.json()
//         dispatch(editReviews(editedReview))
//         return editedReview
//     }
// }



//thunk for delete reviews
export const deleteReviewThunk  = (reviewId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: "DELETE",
    })

    if (response.ok) {
        dispatch(deleteReview(reviewId))
    }
}





//review reducer
const initialState = {
    spotReviews:{},
    userReviews:{}
}

const reviewReducer = (state = initialState, action ) => {
    let newState
    switch (action.type) {
        case LOAD_REVIEWS:
        newState = {...state}
        const reviewObj = {}
        action.reviews.forEach((review)=> reviewObj[review.id] = review)
        newState.spotReviews = reviewObj
        newState.userReviews = {}
        return newState


        case LOAD_USER_REVIEW:
        newState = {...state}
        const userReviewObj = {}
        action.reviews.forEach((review)=> userReviewObj[review.id]= review)
        newState.userReviews = userReviewObj
        newState.spotReviews = {}
        return newState


        case ADD_REVIEW:
        newState = {...state, spotReviews:{...state.spotReviews}}
        newState.spotReviews[action.review.id] = action.review
        return newState


        // case EDIT_REVIEW:
        //     let newReview = {...state}
        //     newReview.editedReview = action.review
        //     return newReview


        case DELETE_REVIEW:
        newState = {...state}
        newState.spotReviews = {...state.spotReviews}
        newState.userReviews = {...state.userReviews}
        delete newState.spotReviews[action.reviewId]
        delete newState.userReviews[action.reviewId]
        return newState



        default:
        return state;
    }
}

export default reviewReducer;
