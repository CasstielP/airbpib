import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { fetchSpots } from '../../store/spot';
import SpotCard from '../SingleSpotPage/spotCard';
import './SpotList.css'

const SpotList = ()=> {
    const dispatch = useDispatch()
    const history = useHistory()
    const spots = useSelector(state =>state.spot.allSpots)
    const spotsArr = Object.values(spots)

    useEffect(()=> {
        dispatch(fetchSpots())
    }, [])

    return (
        <>
        <div className='center-wrap'>
            <div className='allspots-container'>
                { spotsArr.map((spot)=>
                        <SpotCard key={spot.id} spot={spot}/>
                    )
                }
            </div>
        </div>
        </>
    )

    }

    export default SpotList;
