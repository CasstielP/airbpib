
import { csrfFetch } from "../store/csrf";
const LOAD_SPOTS = 'spots/getAllSpots'
const LOAD_USERSPOTS = 'spots/user'
const LOAD_SPOTDETAIL = 'spots/details'
const ADD_SPOT = 'spots/addSpot'
const EDIT_SPOT = 'spots/edit'
const DELETE_SPOT = 'spots/delete'
const ADD_IMAGE = 'spot/addImage'




//action creator
const loadSpots = (spots) => {
   return {
       type: LOAD_SPOTS,
        spots
   }
};

const loadUserSpots = (spots) => {
    return {
        type: LOAD_USERSPOTS,
        spots
    }
}

const loadSpotDetail = (spot) => {
   return {
       type: LOAD_SPOTDETAIL,
       spot
   }
}
 const addSpot  = (spot) => {
    return {
        type: ADD_SPOT,
         spot
    }
};


const editSpot = (spot) => {
   return {
       type: EDIT_SPOT,
       spot
   }
}

const deleteSpot = (spotId) => {
    return {
        type: DELETE_SPOT,
        spotId
    }
}


const addImage = (image) => {
   return {
       type: ADD_IMAGE,
       image
   }
}




//thunk get all spots
export const fetchSpots = () => async (dispatch) => {
    const response = await csrfFetch('/api/spots');
    if(response.ok) {
        const spots = await response.json();
        dispatch(loadSpots(spots))
    }
};


//thunk get users spots
export const fetchUserSpots = () => async (dispatch) => {
    const response = await csrfFetch('/api/spots/current')
    if(response.ok) {
        const userSpots = await response.json()
        dispatch(loadUserSpots(userSpots))
    }
}



//thunk get single spot
export const getOneSpot = (spotId) => async(dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}`)

    if(response.ok) {
        const spot = await response.json()
        dispatch(loadSpotDetail(spot))
    }
}


// thunk create new spot
export const createSpot = (spot) => async (dispatch) => {
    const response = await csrfFetch('/api/spots', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(spot)
    })
    if(response.ok) {
        const spot = await response.json()
        dispatch(addSpot(spot))
        return spot
    }
}


//thunk add image to spot
export const createSpotImage = (spotId, img)=> async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}/images`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(img)
    })
    if(response.ok) {
        const image = await response.json()
        dispatch(addImage(image))
        return image
    }
}





//thunk edit spot
export const editSpotThunk = (spot, spotId) => async(dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(spot)
    })
    if(response.ok) {
        const spot = await response.json()
        dispatch(editSpot(spot))
        return spot
    }
}


//delete spot thunk
export const deleteSpotThunk = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}`, {
        method: "DELETE"
      });
      if(response.ok) {
        dispatch(deleteSpot(spotId))
      }
}


//spot reducer
const initialState = {
    allSpots:{},
    singleSpot:{}
};

const spotReducer = (state = initialState, action) => {
    let newSpots;
    switch(action.type) {
        case LOAD_SPOTS:
        newSpots = {...state}
        const newSpotsArr = {}
        action.spots.Spots.forEach((spot) => newSpotsArr[spot.id] = spot)
        newSpots.allSpots = newSpotsArr
        newSpots.singleSpot = {}
        return newSpots;


        case LOAD_USERSPOTS:
        newSpots = {...state}
        const newUserSpotArr = {}
        action.spots.Spots.forEach((spot) => newUserSpotArr[spot.id] = spot)
        newSpots.allSpots = newUserSpotArr
        newSpots.singleSpot = {}
        return newSpots


        case LOAD_SPOTDETAIL:
            newSpots={...state}
            newSpots.singleSpot = action.spot
            return newSpots;

        case ADD_SPOT:
            newSpots={...state}
            newSpots.allSpots = {...state.allSpots, [action.spot.id]: action.spot}
            return newSpots

        case EDIT_SPOT:
            newSpots = {...state}
            const editedSpot = {...newSpots.allSpots[action.spot.id], ...action.spot}
            newSpots.singleSpot = {...state.singleSpot, ...editedSpot}
            newSpots.allSpots = {...state.allSpots, [action.spot.id]: editedSpot}
            return newSpots


        case DELETE_SPOT:
        newSpots = {...state}
        newSpots.allSpots = {...state.allSpots}
        newSpots.singleSpot = {...state.singleSpot}
        delete newSpots.allSpots[action.spotId]
        if(newSpots.singleSpot.id === action.spotId) newSpots.singleSpot = {}
        return newSpots

        case ADD_IMAGE:
            newSpots = {...state}
            newSpots.allSpots={...state.allSpots}
            newSpots.singleSpot = {...state.singleSpot}
            newSpots.singleSpot.spotImages = [action.image]
            return newSpots

        default:
            return state
    }
}


export default spotReducer;
