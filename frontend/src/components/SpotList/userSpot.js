// import { useDispatch, useSelector } from "react-redux"
// import { Link, useHistory } from "react-router-dom"
// import * as spotActions from '../../store/spot'


// const UserSpot = ({spot}) => {
//     const history = useHistory()
//     const dispatch = useDispatch()
//     const currentUser = useSelector(state=> state.session.user)
//     let isOwner = false
//     if (currentUser?.id === spot.ownerId) isOwner = true


//     const handleDeleteSpot = async () => {
//         if (window.confirm("Are you sure to delete this spot?")) {
//             await dispatch(spotActions.deleteSpotThunk(spot.id))
//     }
// }

//     const handleEditSpot = () => {
//         history.push(`/spots/${spot.id}/edit`)
//     }

//     return (
//         <div>
//         <Link style={{ textDecoration: "none", color: "black" }} to={`/spots/${spot.id}`}>

//         <div>
//             <div><img src={spot.previewImage} /></div>
//           </div>

//           <div>
//             <div>
//               <div>
//                 {spot.city}, {spot.state}
//               </div>

//               <div>
//                 {spot.avgRating ?
//                   (<span>⭐ {spot.avgRating}</span>):
//                   (<span>⭐ no rating yet</span>)
//                 }
//               </div>
//             </div>

//             <div>
//               ${spot.price} <span>per night</span>
//             </div>
//           </div>


//         </Link>
//           <div >
//             {isOwner && (
//               <>
//                 <button
//                 onClick={handleEditSpot}>
//                   Edit Spot
//                 </button>
//                 <button
//                 onClick={handleDeleteSpot}>
//                   Delete Spot
//                 </button>
//               </>
//             )}
//           </div>
//       </div>
//     )
// }




// export default UserSpot;
