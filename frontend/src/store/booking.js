import { csrfFetch } from "./csrf";

const LOAD_BOOKINGS = 'bookings/getall'
const LOAD_USER_BOOKINGS = 'bookings/user'
const CREATE_BOOKING = 'bookings/new'
const EDIT_BOOKING = 'bookings/edit'
const DELETE_BOOKING = 'bookings/delete'


const loadBookings = (bookings) => {
    return {
        type: LOAD_BOOKINGS,
        bookings
    }
}

const loadUserBookings = (bookings)=> {
    return{
        type: LOAD_USER_BOOKINGS,
        bookings
    }
}

const createBooking = (booking) => {
    return {
        type: CREATE_BOOKING,
        booking
    }
}

const editBooking = (booking) => {
    return {
        type: EDIT_BOOKING,
        booking
    }
}

const deleteBooking = (bookingId) => {
    return {
        type: DELETE_BOOKING,
        bookingId
    }
}


//thunks
export const fetchAllBookings = (spotId) => async (dispatch) => {
    const res = await csrfFetch(`/api/spots/${spotId}/bookings`)
    if(res.ok) {
        const spotBookings = await res.json()
        dispatch(loadBookings(spotBookings))
    }
}

export const fetchUserBookings = ()
