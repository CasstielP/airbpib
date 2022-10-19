import { csrfFetch } from "../store/csrf";
const LOAD_SPOTS = 'spots/getAllSpots'
const ADD_SPOT = 'spots/addSpot'

//action creator
export const addSpot  = (spot) => {
    return {
        type: ADD_SPOT,
         spot
    }
};

export const loadSpots = (spots) => {
    return {
        type: LOAD_SPOTS,
         spots
    }
};

//thunk get all spots
export const fetchSpots = () => async (dispatch) => {
    const response = await fetch('/api/spots');
    const spots = await response.json();
    dispatch(loadSpots(spots))
    // console.log(spots)
    // return spots;
};

// thunk create new spot
export const createSpot = (payload) => async (dispatch) => {

    const response = await csrfFetch('/api/spots', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })

            const spot = await response.json();
            dispatch(addSpot(spot));
            return spot;

    }



    //thunk create spot image(upon creating a new spot)
//     export const createSpotImage = (payload) => async (dispatch) => {
//         if(spot) {
//         const spotImg = await fetch(`/${spot.id}/images`, {
//             method: 'POST',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify(payload)
//         })
//         }

// }






//spot reducer
const initialState = {};

const spotReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_SPOTS:
        const newState = { ...state};
        action.spots.Spots.forEach(
            (spot)=> (newState[spot.id] = spot)
        )
        return newState;

        case ADD_SPOT:
        return {
            ...state,
            [action.spot.id]: action.spot
        }


        default:
        return state
    }
}


export default spotReducer;
