{
    "Reviews": [
      {
        "id": 1,
        "userId": 1,
        "spotId": 1,
        "review": "This was an awesome spot!",
        "stars": 5,
        "createdAt": "2021-11-19 20:39:36",
        "updatedAt": "2021-11-19 20:39:36" ,
        "User": {
          "id": 1,
          "firstName": "John",
          "lastName": "Smith"
        },
        "Spot": {
          "id": 1,
          "ownerId": 1,
          "address": "123 Disney Lane",
          "city": "San Francisco",
          "state": "California",
          "country": "United States of America",
          "lat": 37.7645358,
          "lng": -122.4730327,
          "name": "App Academy",
          "price": 123,
          "previewImage": "image url"
        },
        "ReviewImages": [
          {
            "id": 1,
            "url": "image url"
          }
        ]
      }
    ]
  }





  const handleSubmit = async (e) => {
    console.log("COMPONENT HANDLESUBMIT STARTS")
    e.preventDefault()
    setErrors([])
    setHasSubmitted(true)

    const errorsArr = []

    if (!review.length || review.length > 255) errorsArr.push("please enter a valid review fewer than 255 characters long")
    if (url.length && (url.length > 255 || !url.includes(".jpg"||".jpeg"||".png"||".gif"))) errorsArr.push("please enter a valid image url fewer than 255 characters long")

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


      reset()
      history.push(`/spots/${spotId}`)

    // console.log("COMPONENT HANDLESUBMIT ENDS")
  }
