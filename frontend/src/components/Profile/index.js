import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchSpots } from "../../store/spot";

const ProfilePage = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state=> state.session.user)
    const allSpots = useSelector(state=> Object.values(state.spot.allspots))
    const UserSpots = allSpots.filter((spot)=> spot.ownerId === currentUser.id)

    useEffect(()=> {
        dispatch(fetchSpots())
    }, [])

    return (
        <>
        <h3>Profile Page</h3>
        <div>
            {UserSpots.map((spot)=>
                    <div key={spot.id} >
                        <h3 id='spotName'>{spot.name}</h3>
                        <p>User Name</p>
                        <p>Image</p>
                        <p>{spot.city}, {spot.country}</p>
                        <p>{spot.price}$ per night</p>
                        <p> {spot.avgRating}</p>
                    </div>
                )}
        </div>
        </>
    )

}

export default ProfilePage
