import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom'
import './bkComf.css'
import aircover from '../SingleSpotPage/aircover.png'
import check from './check.png'
const BookingConfirmation = () => {


    return (
        <>
        <div>
        <div className="bk_confirmation_wrapper">
            <div id='confirmation_text'>Your Booking is Confirmed!</div>
            <div>
                <div className="bk_modal_footer">
                    <img  id ='bk_modal_aircover'src={aircover}/>
                    <img id ='check'src={check}/>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}


export default BookingConfirmation
