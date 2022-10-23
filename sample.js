useEffect(() => {
  console.log("5 USE EFFECT RUNNING: DISPATCH THUNK")
  dispatch(thunkGetAllSpots())
  // cleanup function to reset spots
  return () => {
    console.log("LOADALLSPOTS USE EFFECT CLEANUP FUNCTION: RESET SPOTS")
    dispatch(acResetSpots())
  }
}, [dispatch])
