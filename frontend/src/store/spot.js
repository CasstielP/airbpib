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

//thunk
export const fetchSpots = () => async (dispatch) => {
    const response = await fetch('/api/spots');
    const spots = await response.json();
    dispatch(loadSpots(spots))
    // console.log(spots)
    // return spots;
};




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

        default:
        return state
    }
}


export default spotReducer;
