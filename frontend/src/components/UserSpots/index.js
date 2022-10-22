import { useDispatch, useSelector } from "react-redux"
import { NavLink, useHistory } from "react-router-dom"
import { useEffect, useContext} from "react"
import { Redirect } from "react-router-dom"
import { ModalContext } from "../../context/Modal"
import * as spotActions from "../../store/spot"
import EditSpotModal from "../EditSpot/editSpotModal"
import EditSpotPage from "../EditSpot"
const UserSpots = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const user = useSelector(state=> state.session.user)
    const { setModalType } = useContext(ModalContext)
    const spots = useSelector(state=>Object.values(state.spot.allSpots))
    const ownedSpots = spots?.filter((spot)=> spot.ownerId === user.id)


    useEffect(()=> {
        dispatch(spotActions.fetchSpots())
    },[])

    if(!user) return <Redirect to='/'/>


    const handleDeleteSpot = (spotId) => {
        if(window.confirm("are you sure you want to delete this spot?")) {
            dispatch(spotActions.deleteSpotThunk(spotId)).then(() => history.push("/user"))
        }
    }

    return (
        <>
        <h2>Spots Currently Hosting</h2>

        <div>
            {
                ownedSpots.map((spot)=>(
                    <div key={spot.id}>
                        <img src={spot.previewImage}/>
                        <div>
                            ⭐{spot.avgRating}
                        </div>
                        <div>{spot.city}, {spot.state}, {spot.country}</div>
                        <div>{spot.description}</div>
                        <div>{spot.price}$ per night</div>
                        <NavLink to={`/spots/${spot.id}/edit`}><button>Edit Spot</button></NavLink>
                        <button value={spot.id} onClick={(e)=>handleDeleteSpot(e.target.value)}>Delete</button>
                    </div>
                ))
            }
        </div>
        </>
    )

}


export default UserSpots;
