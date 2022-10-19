import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpots } from '../../store/spot';
import './SpotList.css'

const SpotList = ()=> {
    const dispatch = useDispatch()

    const spots = useSelector(state =>state.spotState)

    console.log(spots)
    useEffect(()=> {
        dispatch(fetchSpots())
    }, [dispatch])

    return (
        <div>
            <h1 id='spotHead'>Spots</h1>
            <div id='SpotContainer'>
                {Object.values(spots).map((spot)=> (
                <div id='singSpot' key={spot.id} >
                     {/* <img src={`${spot.previewImage}`}/> */}
                <p id='spotimg'>Image</p>
                <h3 id='spotName'>{spot.name}</h3>
                <p>{spot.city}, {spot.country}</p>
                <p>{spot.price}$ per night</p>
                <p> {spot.avgRating}</p>
                </div>
            ))}
            </div>
        </div>
    )

    }

    export default SpotList;
