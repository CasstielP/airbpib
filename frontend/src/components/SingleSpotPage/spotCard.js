import {Link} from 'react-router-dom'


const SpotCard = ({spot}) => {
    return (
        <div>
            <Link to={`/spots/${spot.id}`}>
                <div>
                    {
                        spot.previewImage ?
                            (<div>
                                {/* <img src={spot.previewImage}/> */}
                                <p>has image</p>
                                </div>) :
                            (<div><p>no image</p></div>)
                    }
                </div>
                <div>{spot.name}</div>
                <div>{spot.city}{spot.country}</div>
                <div>
                {spot.avgRating ?
              (<span>⭐{spot.avgRating}</span>):
              (<span>⭐rate this spot</span>)
                }
                </div>
                <div>
                <span>${spot.price} per  night</span>
                </div>
            </Link>
        </div>

    )
}


export default SpotCard
