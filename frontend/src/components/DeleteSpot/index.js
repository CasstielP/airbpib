import { useSelector, useDispatch } from "react-redux";
import {deleteSpotThunk} from '../../store/spot'
import { useHistory, useParams } from "react-router-dom";


const DeleteSpotForm = () => {
    const {spotId} = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
    const spot = useSelector(state=> state.spot[spotId])

    if(!spot) {
        alert('Spot not found!')
    }

    const handleDeleteSpot =()=> {
        const spotIdNum = Number(spotId)
        dispatch(deleteSpotThunk(spotIdNum))
        alert('success!')
        history.push('/')
    }

    return (
        <div>
            <button onClick={handleDeleteSpot}>Delete Spot</button>
        </div>
    )
}

export default DeleteSpotForm;
