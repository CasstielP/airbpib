import { useSelector, useDispatch } from "react-redux";
import {deleteSpotThunk} from '../../store/spot'
import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";


const DeleteSpotForm = () => {
    const {spotId} = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
    const spot = useSelector(state=> state.spot[spotId])
    const [showDeleteSpotModal, setShowDeleteSpotModal] = useState(false)
    const [showdltSpotError, setShowDltSpotError] = useState(false)
    if(!spot) {
        // alert('Spot not found!')
        setShowDltSpotError(true)
    }

    const handleDeleteSpot =()=> {
        const spotIdNum = Number(spotId)
        dispatch(deleteSpotThunk(spotIdNum))
        // alert('success!')
        setShowDeleteSpotModal(true)
        history.push('/')
    }

    return (
        <div>
            <button onClick={handleDeleteSpot}>Delete Spot</button>
        </div>
    )
}

export default DeleteSpotForm;
