const handleSubmit = async (e) => {
  // console.log("COMPONENT HANDLESUBMIT STARTS")
  e.preventDefault()
  setErrors([])
  setHasSubmitted(true)

  const errorsArr = []

  if (!review.length || review.length > 255) errorsArr.push("please enter a valid review fewer than 255 characters long")
  if (url.length && (url.length > 255 || !url.includes(".jpg"||".jpeg"||".png"||".gif"))) errorsArr.push("please enter a valid url fewer than 255 characters long")

  setErrors(errorsArr)

  if (errorsArr.length) return

  const reviewInfo = { review, stars, url }

  // console.log("COMPONENT HANDLESUBMIT, BEFORE DISPATCH THUNK, REVIEWINFO:", reviewInfo)

  const newReview = await dispatch(thunkCreateNewReview(reviewInfo, spotId, currentUser))
    .catch(async (res) => {
      const message = await res.json()
      const messageErrors = []
      if (message) {
        messageErrors.push(message.message)
        setErrors(messageErrors)
      }
    })
  if (newReview && !url.length) setShowModal(false)

  if (newReview && url.length && !errorsArr.length) {
    // console.log("COMPONENT HANDLESUBMIT, AFTER THUNK RETURNS: NEWREVIEW:", newReview)

    const imageObj = ({url: url})

    // console.log("COMPONENT HANDLESUBMIT, BEFORE DISPATCH THUNK FOR ADD REVIEW IMAGE, IMAGEOBJ:", imageObj)

    await dispatch(thunkAddReviewImage(newReview.id, imageObj))
    .then(()=>setShowModal(false))

    reset()
    history.push(`/spots/${spotId}`)
  }
  // console.log("COMPONENT HANDLESUBMIT ENDS")
}
