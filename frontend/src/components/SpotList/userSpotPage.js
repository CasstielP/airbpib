// import { useDispatch, useSelector } from "react-redux"
// import { Redirect, useHistory } from "react-router-dom"
// import React, { useEffect } from "react"
// import * as spotActions from '../../store/spot'
// import UserSpot from "./userSpot"

// const UserSpots = () => {
//     const currentUser = ((state) => state.session.user)
//     const history = useHistory()
//     const dispatch = useDispatch()
//     const spots = useSelector((state)=>Object.values(state.spot.allSpots))


//     useEffect(() => {
//         dispatch(spotActions.fetchUserSpots())
//       }, [dispatch])

//       if(!currentUser) return <Redirect to='/' />


//       return (
//         <>
//         <div className="userSpot-top">
//           {
//             spots.length === 0 ?
//             <h1>You're not currently hosting any spots!</h1> :
//             <h1>My Spots</h1>
//           }
//         </div>

//         <div className="wrapper-center">
//           <div className="allspots-container myspots">
//             {
//               spots.map((spot) => (
//                 <UserSpot key={spot.id} spot={spot}>
//                 </UserSpot>
//               ))
//             }
//           </div>
//         </div>

//       </>
//       )
// }


// export default UserSpots
