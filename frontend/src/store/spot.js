import { csrfFetch } from "../store/csrf";
const LOAD_SPOTS = 'spots/getAllSpots'
const LOAD_ONESPOT = 'spots/spotdetail'
const LOAD_USERSPOTS = 'spots/user'
const ADD_SPOT = 'spots/addSpot'
const EDIT_SPOT = 'spots/edit'
const DELETE_SPOT = 'spots/delete'
const ADD_IMAGE = 'spots/image'

//action creator
export const loadSpots = (spots) => {
    return {
        type: LOAD_SPOTS,
         spots
    }
};

export const loadOneSpot = (spot) => {
    return {
        type: LOAD_ONESPOT,
        spot
    }
}

export const loadUserSpots = (spots) => {
    return {
        type: LOAD_USERSPOTS,
        spots
    }
}


export const addSpot  = (spot) => {
    return {
        type: ADD_SPOT,
         spot
    }
};


export const editSpot = (spot) => {
    return {
        type: EDIT_SPOT,
        spot
    }
}

export const deleteSpot = (spotId) => {
    return {
        type: DELETE_SPOT,
        spotId
    }
}

export const addSpotImage = (image, spotId) => {
    return {
        type: ADD_IMAGE,
        image,
        spotId
    }
}


//thunk get all spots
export const fetchSpots = () => async (dispatch) => {
    const response = await csrfFetch('/api/spots');
    if(response.ok) {
        const spots = await response.json();
        dispatch(loadSpots(spots))
        return spots
    }

};


//thunk get spot detail
export const getSpotDetail = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}`)
    if(response.ok) {
        const spot = await response.json()
        dispatch(loadOneSpot(spot))
        return spot
    }
}


//thunk get current user spot
export const getUserSpots = ()=> async (dispatch) => {
    const response = await csrfFetch('/api/spots/current')
    if(response.ok) {
        const spots = await response.json();
        dispatch(loadUserSpots(spots))
        return spots
    }
}


// thunk create new spot
export const createSpot = (payload) => async (dispatch) => {

    const response = await csrfFetch('/api/spots', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })
        if(response.ok) {
            const spot = await response.json();
            dispatch(addSpot(spot));
            return spot;
        }
    }


//thunk edit spot
export const editSpotThunk = (spotId, payload) => async (dispatch) => {
    const response = csrfFetch(`/api/spots/${spotId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(payload)
    })
    if(response.ok) {
        const spot = await response.json()
        dispatch(editSpot(spot))
    }
}



//thunk delete spot
export const deleteSpotThunk = (spotId)=> async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}`, {
        method: "DELETE",
    })
    if(response.ok) {
        dispatch(deleteSpot(spotId))
    }
}


//thunk add image to spot
export const addImageToSpot = (payload, spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}/images`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)
    })
    if(response.ok) {
        const image = await response.json()
        dispatch(addSpotImage(image))
        return image
    }
}




//spot reducer
// const initialState = {
//     allSpots:{},
//     singleSpot: {}
// };

const spotReducer = (state = {}, action) => {
    switch(action.type) {
        case LOAD_SPOTS:
        const newState = {};
        action.spots.Spots.forEach(
            (spot)=> (newState[spot.id] = spot)
        )
        return {...newState};

        case LOAD_ONESPOT:
            const OneSpotState = {...state}
            OneSpotState[action.spot.id] = action.spot
            return OneSpotState

        case LOAD_USERSPOTS:
            const userSpots = {}
            action.spots.Spots.forEach(spot=> {
                userSpots[spot.id] = spot
            })
            return userSpots;


        case ADD_SPOT:
        return {
            ...state,
            [action.spot.id]: action.spot
        }


        case EDIT_SPOT:
            return{
                ...state,
                [action.spot.id]: {...state[action.spot.id],
                ...action.spot
                }
            }


        case DELETE_SPOT:
            const newSpots = {...state}
            delete newSpots[action.id]
            return newSpots


        case ADD_IMAGE:
            return {
                ...state,
                [action.id]: { ...state[action.id], previewImage: action.img }
            }


        default:
        return state
    }
}


export default spotReducer;




// import { csrfFetch } from "../store/csrf";
// const LOAD_SPOTS = 'spots/getAllSpots'
// const ADD_SPOT = 'spots/addSpot'
// const ADD_IMAGE = 'spot/addImage'
// const LOAD_SPOTDETAIL = 'spots/details'
// const EDIT_SPOT = 'spots/edit'
// const DELETE_SPOT = 'spots/delete'




// //action creator
// export const addSpot  = (spot) => {
//     return {
//         type: ADD_SPOT,
//          spot
//     }
// };

// export const addImage = (image) => {
//     return {
//         type: ADD_IMAGE,
//         image
//     }
// }

// export const loadSpots = (spots) => {
//     return {
//         type: LOAD_SPOTS,
//          spots
//     }
// };

// export const loadSpotDetail = (spot) => {
//     return {
//         type: LOAD_SPOTDETAIL,
//         spot
//     }
// }

// export const editSpot = (spot) => {
//     return {
//         type: EDIT_SPOT,
//         spot
//     }
// }


// export const deleteSpot = (spotId) => {
//     return {
//         type: DELETE_SPOT,
//         spotId
//     }
// }




// //thunk get all spots
// export const fetchSpots = () => async (dispatch) => {
//     const response = await csrfFetch('/api/spots');
//     if(response.ok) {
//         const spots = await response.json();
//         dispatch(loadSpots(spots))
//     }
//     return null
// };


// //thunk get single spot
// export const getOneSpot = (spotId) => async(dispatch) => {
//     const response = await csrfFetch(`/api/spots/${spotId}`)

//     if(response.ok) {
//         const spot = await response.json()
//         dispatch(loadSpotDetail(spot))
//         return spot
//     }
// }


// // thunk create new spot
// export const createSpot = (spot) => async (dispatch) => {
//     const response = await csrfFetch('/api/spots', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(spot)
//     })
//     if(response.ok) {
//         const spot = await response.json()
//         dispatch(addSpot(spot))
//         return spot
//     }
// }


// //thunk add image to spot
// export const createSpotImage = (spotId, {url, preview})=> async (dispatch) => {
//     const response = await csrfFetch(`/api/spots/${spotId}/images`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body:JSON.stringify({url, preview})
//     })
//     if(response.ok) {
//         dispatch(getOneSpot(spotId))
//     }
//     return response;
// }





// //thunk edit spot
// export const editSpotThunk = (spot, spotId) => async(dispatch) => {
//     const response = await csrfFetch(`/api/spots/${spotId}`, {
//         method: 'put',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(spot)
//     })
//     if(response.ok) {
//         const spot = await response.json()
//         dispatch(editSpot(spot))
//         return spot
//     }
//     return null;
// }


// //delete spot thunk
// export const deleteSpotThunk = (spotId) => async (dispatch) => {
//     const response = await csrfFetch(`/api/spots/${spotId}`, {
//         method: "delete"
//       });
//       if(response.ok) {
//         dispatch(deleteSpot(spotId))
//       }
// }


// //spot reducer
// const initialState = {
//     allSpots:{},
//     singleSpot:{}
// };

// const spotReducer = (state = initialState, action) => {
//     let newSpots;
//     switch(action.type) {
//         case LOAD_SPOTS:
//         newSpots = { ...state, allSpots: {...state.allSpots}};
//         action.spots.Spots.forEach(spot=> {
//             newSpots.allSpots[spot.id] = spot
//         })

//         return newSpots;


//         case LOAD_SPOTDETAIL:
//             newSpots={...state, singleSpot: { ...state.singleSpot }}
//             newSpots.singleSpot = action.spot
//             return newSpots;

//         case ADD_SPOT:
//         return {
//             singleSpot: null,
//             allSpots:{
//                 ...state.allSpots,
//                 [action.spot.id]: action.spot
//             }
//         }

//         case EDIT_SPOT:
//             newSpots = {...state}
//             newSpots.singleSpot = action.spot
//             return newSpots

//         case DELETE_SPOT:
//         newSpots = {...state,
//             allSpots: {...state.allSpots},
//             singleSpot: {...state.singleSpot}
//         }
//         delete newSpots.singleSpot
//         delete newSpots.allSpots[action.spot]
//         return newSpots


//     default:
//         return state
//     }
// }


// export default spotReducer;
