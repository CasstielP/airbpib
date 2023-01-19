const express = require("express");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
// const { User } = require('../../db/models');
const {
  Review,
  SpotImage,
  User,
  ReviewImage,
  Booking,
  sequelize,
} = require("../../db/models");
const { Spot } = require("../../db/models");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

const validateQueries = [
  check("page")
    .custom((val) => {
      if (!val) return true;
      val = parseInt(val);
      if (!val) return false;
      if (val >= 1) return true;
    })
    .withMessage("Invalid page number"),
  check("size")
    .custom((val) => {
      if (!val) return true;
      val = parseInt(val);
      if (!val) return false;
      if (val >= 1) return true;
    })
    .withMessage("Invalid size number"),
  check("maxLat")
    .custom((val) => {
      if (!val) return true;
      val = parseFloat(val);
      if (!val) return false;
      return true;
    })
    .withMessage("Maximum latitude is invalid"),
  check("minLat")
    .custom((val) => {
      if (!val) return true;
      val = parseFloat(val);
      if (!val) return false;
      return true;
    })
    .withMessage("Minimum latitude is invalid"),
  check("minLng")
    .custom((val) => {
      if (!val) return true;
      val = parseFloat(val);
      if (!val) return false;
      return true;
    })
    .withMessage("Maximum longitude is invalid"),
  check("maxLng")
    .custom((val) => {
      if (!val) return true;
      val = parseFloat(val);
      if (!val) return false;
      return true;
    })
    .withMessage("Minimum longitude is invalid"),
  check("minPrice").custom((val) => {
    if (!val) return true;
    val = parseFloat(val);
    if (!val) return false;
    if (val >= 0) return true;
  }),
  check("maxPrice").custom((val) => {
    if (!val) return true;
    val = parseFloat(val);
    if (!val) return false;
    if (val >= 0) return true;
  }),
  handleValidationErrors,
];

//----------------get all spots-----------------------
router.get("/", validateQueries, async (req, res) => {
  let { page, size, minLat, maxLat, minLng, maxLng, minPrice, MaxPrice } =
    req.query;

  page = parseInt(page);
  size = parseInt(size);
  if (!page) page = 1;
  if (!size) size = 100;
  const pagination = {};
  if (page >= 1 && size >= 1) {
    pagination.offset = size * (page - 1);
    pagination.limit = size;
  }

  const Spots = await Spot.findAll({
    ...pagination,
  });

  for (let i = 0; i < Spots.length; i++) {
    let spot = Spots[i];
    let count = await Review.sum("stars", {
      where: {
        spotId: spot.id,
      },
    });
    let total = await Review.count({
      where: {
        spotId: spot.id,
      },
    });
    spot.dataValues.avgRating = count / total;
    let img = await SpotImage.findOne({
      where: {
        spotId: spot.id,
        preview: true,
      },
      attributes: ["url"],
    });
    if (!img) {
      spot.dataValues.previewImage = "No preview";
    } else {
      spot.dataValues.previewImage = img.url;
    }
  }

  res.json({
    Spots,
    page,
    size,
  });
});

const validateNewSpot = [
  check("address")
    .exists({ checkFalsy: true })
    .withMessage("street address is required"),
  check("city").exists({ checkFalsy: true }).withMessage("city is required"),
  check("state").exists({ checkFalsy: true }).withMessage("state is required"),
  check("country")
    .exists({ checkFalsy: true })
    .withMessage("country is required"),
  check("lat")
    .exists({ checkFalsy: true })
    .withMessage("latitude is not valid"),
  check("lng")
    .exists({ checkFalsy: true })
    .withMessage("longtitude is not valid"),
  check("name")
    .exists({ checkFalsy: true })
    .isLength({ max: 49 })
    .withMessage("name must be less than 50 characters"),
  check("description")
    .exists({ checkFalsy: true })
    .withMessage("description is required"),
  check("price")
    .exists({ checkFalsy: true })
    .withMessage("price per day is required"),
  handleValidationErrors,
];

//----------------create new spot ----------------------
router.post("/", validateNewSpot, requireAuth, async (req, res) => {
  const { address, city, state, country, lat, lng, name, description, price } =
    req.body;
  const newSpot = await Spot.create({
    ownerId: req.user.id,
    address,
    city,
    state,
    country,
    lat,
    lng,
    name,
    description,
    price,
  });
  res.status(201);
  res.json(newSpot);
});

router.post("/:spotId/images", requireAuth, async (req, res) => {
  let userId = req.user.id;
  const spot = await Spot.findByPk(req.params.spotId);
  if (!spot) {
    res.status(404); //not found
    res.json({
      message: "Spot couldn't be found",
      statusCode: res.statusCode,
    });
  }
  if (userId !== spot.ownerId) {
    res.status(403); //unauthorized
    return res.json("user doesnt have credential to add image");
  }

  const { url, preview } = req.body;

  const newSpotImg = await SpotImage.create({
    spotId: spot.id,
    url,
    preview,
  });

  return res.json({
    id: newSpotImg.id,
    url,
    preview,
  });
});

router.get("/current", requireAuth, async (req, res) => {
  let userId = req.user.id;
  const userSpots = await Spot.findAll({
    where: {
      ownerId: userId,
    },
    include: {
      model: Review,
      attributes: [],
    },
  });

  for (let i = 0; i < userSpots.length; i++) {
    let spot = userSpots[i];
    let count = await Review.sum("stars", {
      where: {
        spotId: spot.id,
      },
    });
    let total = await Review.count({
      where: {
        spotId: spot.id,
      },
    });
    spot.dataValues.avgRating = count / total;
    spot.dataValues.previewImage = (
      await SpotImage.findOne({
        where: {
          spotId: spot.id,
          preview: true,
        },
        attributes: ["url"],
      })
    ).url;
  }

  return res.json({
    Spots: userSpots,
  });
});

router.get("/:spotId", async (req, res) => {
  const userSpot = await Spot.findByPk(req.params.spotId, {
    include: [
      {
        model: SpotImage,
        as: "SpotImages",
        attributes: ["id", "url", "preview"],
      },
      {
        model: User,
        as: "Owner",
        attributes: ["id", "firstName", "lastName"],
      },
    ],
  });
  if (!userSpot) {
    res.status(404);
    res.json({
      message: "Spot couldn't be found",
      statusCode: res.statusCode,
    });
  }

  let count = await Review.sum("stars", {
    where: {
      spotId: userSpot.id,
    },
  });
  let total = await Review.count({
    where: {
      spotId: userSpot.id,
    },
  });
  userSpot.dataValues.avgRating = count / total;
  userSpot.dataValues.previewImage = await SpotImage.findOne({
    where: {
      spotId: userSpot.id,
      preview: true,
    },
    attributes: ["url"],
  });

  res.json(userSpot);
});

const validateEditSpot = [
  check("address")
    .exists({ checkFalsy: true })
    .withMessage("Street address is required"),
  check("city").exists({ checkFalsy: true }).withMessage("City is required"),
  check("state").exists({ checkFalsy: true }).withMessage("State is required"),
  check("country")
    .exists({ checkFalsy: true })
    .withMessage("Country is required"),
  check("lat")
    .exists({ checkFalsy: true })
    .withMessage("Latitude is not valid"),
  check("lng")
    .exists({ checkFalsy: true })
    .withMessage("Longtitude is not valid"),
  check("name")
    .exists({ checkFalsy: true })
    .isLength({ max: 49 })
    .withMessage("Name must be less than 50 characters"),
  check("description")
    .exists({ checkFalsy: true })
    .withMessage("Description is required"),
  check("price")
    .exists({ checkFalsy: true })
    .withMessage("Price per day is required"),
  handleValidationErrors,
];

router.put("/:spotId", validateEditSpot, requireAuth, async (req, res) => {
  const { address, city, state, country, lat, lng, name, description, price } =
    req.body;
  const spot = await Spot.findByPk(req.params.spotId);
  if (!spot) {
    res.status(404);
    return res.json({
      message: "Spot couldn't be found",
      statusCode: res.statusCode,
    });
  }
  const userId = req.user.id;
  if (userId !== spot.ownerId) {
    res.status(403);
    return res.json({
      message: "unauthorized for such action!",
      statusCode: res.statusCode,
    });
  }

  await spot.update({
    address,
    city,
    state,
    country,
    lat,
    lng,
    name,
    description,
    price,
  });
  return res.json(spot);
});

router.delete("/:spotId", requireAuth, async (req, res) => {
  const spot = await Spot.findByPk(req.params.spotId);
  if (!spot) {
    res.status(404);
    return res.json({
      message: "Spot couldn't be found",
      statusCode: res.statusCode,
    });
  }
  const userId = req.user.id;
  if (userId !== spot.ownerId) {
    res.status(403); //unauthorized
    return res.json("unauthorized for such action!");
  }

  await spot.destroy();
  res.status(200);
  res.json({
    message: "Successfully deleted",
    statusCode: res.statusCode,
  });
});

const validateNewReview = [
  check("review")
    .exists({ checkFalsy: true })
    .withMessage("Review text is required"),
  check("stars")
    .exists({ checkFalsy: true })
    .custom((value) => {
      if (value >= 1 && value <= 5) {
        return true;
      } else false;
    })
    .withMessage("Stars must be integer from 1 to 5"),
  handleValidationErrors,
];

router.post(
  "/:spotId/reviews",
  validateNewReview,
  requireAuth,
  async (req, res) => {
    console.log("------------------------------1");
    const { review, stars } = req.body;
    let userId = req.user.id;
    console.log("------------------------------2");
    const spot = await Spot.findByPk(req.params.spotId);
    console.log("------------------------------3");
    if (!spot) {
      res.status(404);
      res.json({
        message: "Spot couldn't be found",
        statusCode: res.statusCode,
      });
    }
    console.log("------------------------------4");

    const allReview = await Review.findAll({
      where: {
        spotId: req.params.spotId,
      },
    });
    console.log("------------------------------5");
    for (let i = 0; i < allReview.length; i++) {
      console.log("------------------------------6");
      let singRev = allReview[i];
      if (userId == singRev.userId) {
        res.status(403);
        return res.json({
          message: "User already has a review for this spot",
          statusCode: res.statusCode,
        });
      }
    }

    const newReview = await Review.create({
      spotId: req.params.spotId,
      userId: req.user.id,
      review,
      stars,
    });

    console.log("------------------------------8");
    res.status(201);
    res.json(newReview);
  }
);

router.get("/:spotId/reviews", async (req, res) => {
  const spot = await Spot.findByPk(req.params.spotId);
  if (!spot) {
    res.status(404);
    res.json({
      message: "Spot couldn't be found",
      statusCode: res.statusCode,
    });
  }
  const reviews = await Review.findAll({
    where: {
      spotId: req.params.spotId,
    },
    include: [
      {
        model: User,
        attributes: ["id", "firstName", "lastName"],
      },
      {
        model: ReviewImage,
        attributes: ["id", "url"],
      },
    ],
  });

  res.json({
    Reviews: reviews,
  });
});

const validateDates = [
  check("endDate")
    .custom(
      (enDate, { req }) =>
        new Date(req.body.endDate) > new Date(req.body.startDate)
    )
    .withMessage("end Date cannot be on or before start Date"),
  handleValidationErrors,
];

router.post(
  "/:spotId/bookings",
  // validateDates,
  requireAuth,
  async (req, res) => {
    const { startDate, endDate } = req.body;
    let userId = req.user.id;
    const spot = await Spot.findByPk(req.params.spotId);
    if (!spot) {
      res.status(404);
      res.json({
        message: "Spot couldn't be found",
        statusCode: res.statusCode,
      });
    }
    if (userId === spot.userId) {
      res.status(400);
      res.json({
        message: "Spot must not belong to the current user!",
        statusCode: res.statusCode,
      });
    }


    const allspotBookings = await Booking.findAll({
      where: {
        spotId: req.params.spotId,
      },
    });

    if(new Date(req.body.endDate) < new Date(req.body.startDate)) {
      res.status(403);
      res.json({
        message:
          "end date cannot be on or before start date",
        statusCode: 403,
        errors: {
          endDate: "end date cannot be on or before start date",
        },
      })
    }

    for (let i = 0; i < allspotBookings.length; i++) {
      let bookingStartDate = allspotBookings[i].dataValues.startDate;
      let bookingEndDate = allspotBookings[i].dataValues.endDate;

      if (
        bookingStartDate <= new Date(req.body.startDate) &&
        new Date(req.body.startDate) <= bookingEndDate &&
        bookingStartDate <= new Date(req.body.endDate) &&
        new Date(req.body.endDate) <= bookingEndDate
      ) {
        res.status(403);
         res.json({
          message: "Sorry, this spot is already booked for the specified dates",
          statusCode: 403,
          errors: {
            startDate: "Start date conflicts with an existing booking",
            endDate: "End date conflicts with an existing booking",
          },
        });


        if (
          new Date(req.body.startDate) >= bookingStartDate &&
          new Date(req.body.startDate) <= bookingEndDate
        ) {
          res.status(403);
          res.json({
            message:
              "Sorry, this spot is already booked for the specified dates",
            statusCode: 403,
            errors: {
              startDate: "Start date conflicts with an existing booking",
            },
          });
        }
      }
      if (
        new Date(req.body.endDate) >= bookingStartDate &&
        new Date(req.body.endDate) <= bookingEndDate
      ) {
        res.status(403);
        res.json({
          message: "Sorry, this spot is already booked for the specified dates",
          statusCode: 403,
          errors: {
            endDate: "End date conflicts with an existing booking",
          },
        });
      }

      if (
        new Date(req.body.startDate) < bookingStartDate &&
        new Date(req.body.endDate) > bookingEndDate
      ) {
        res.status(403);
        res.json({
          message: "Sorry, this spot is already booked for the specified dates",
          statusCode: 403,
          errors: {
            endDate: "End date conflicts with an existing booking",
          },
        });
      }
    }

    const newBooking = await Booking.create({
      spotId: req.params.spotId,
      userId: userId,
      startDate,
      endDate,
    });

    res.json(newBooking);
  }
);

router.get("/:spotId/bookings", requireAuth, async (req, res) => {
  let userId = req.user.id;
  const spot = await Spot.findByPk(req.params.spotId);
  if (!spot) {
    res.status(404);
    res.json({
      message: "Spot couldn't be found",
      statusCode: res.statusCode,
    });
  }

  if (userId !== spot.ownerId) {
    const bookings = await Booking.findAll({
      where: {
        spotId: req.params.spotId,
      },
      attributes: ["spotId", "startDate", "endDate"],
    });

    res.json({
      Bookings: bookings,
    });
  }

  if (userId === spot.ownerId) {
    const bookings = await Booking.findAll({
      where: {
        spotId: req.params.spotId,
      },
      include: {
        model: User,
        attributes: ["id", "firstName", "lastName"],
      },
    });
    res.json({
      Bookings: bookings,
    });
  }
});

module.exports = router;
