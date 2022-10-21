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





  <form>
  <label>Experience
      <br></br>
      <textarea
          className="experience-input-box"
          type="text" value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write a public review"
          required />
  </label>
  <br></br>
  <label className="select-star-text"> Overall rating
      <div className="star-container">
          {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;

              return (
                  <label>
                      <input
                          type="radio" name="stars"
                          value={ratingValue}
                          onClick={() => setStars(ratingValue)}
                      />
                      <FaStar
                          className="star"
                          color={ratingValue <= (hover || stars) ? "#ffc107" : "#e4e5e9"}
                          size={36}
                          onMouseEnter={() => setHover(ratingValue)}
                          onMouseLeave={() => setHover(ratingValue)}
                      />
                  </label>
              )
          })}
      </div>
  </label>
  <br></br>
  <button
      className="review-submit-button"
      onClick={() => { alert('Please login or signup first') }}>Submit</button>
</form>
