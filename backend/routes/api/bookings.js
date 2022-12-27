const express = require("express");

const { setTokenCookie, requireAuth } = require("../../utils/auth");

const {
  Review,
  SpotImage,
  ReviewImage,
  User,
  Booking,
  sequelize,
} = require("../../db/models");
const { Spot } = require("../../db/models");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

router.get("/current", requireAuth, async (req, res) => {
  let userId = req.user.id;
  const bookings = await Booking.findAll({
    where: {
      userId: userId,
    },
    include: {
      model: Spot,
      attributes: {
        exclude: ["description", "createdAt", "updatedAt"],
      },
    },
  });
  res.json({
    Bookings: bookings,
  });
});

const validateDates = [
  check("endDate")
    .custom(
      (endate, { req }) =>
        new Date(req.body.endDate) > new Date(req.body.startDate)
    )
    .withMessage("endDate cannot be on or before startDate"),
  handleValidationErrors,
];
router.put("/:bookingId", requireAuth, validateDates, async (req, res) => {
  let userId = req.user.id;
  const { startDate, endDate } = req.body;
  const booking = await Booking.findByPk(req.params.bookingId);
  // const spot = await Spot.findOne({
  //     where: {
  //         id: booking.spotId
  //     }
  // })
  if (!booking) {
    res.status(404);
    res.json({
      message: "Booking couldn't be found",
      statusCode: res.statusCode,
    });
  }

  if (userId !== booking.userId) {
    res.status(403);
    res.json({
      message: "Unauthorized for such action!",
      statusCode: res.statusCode,
    });
  }

  if (new Date() > booking.endDate) {
    res.status(403);
    res.json({
      message: "Past bookings can't be modified",
      statusCode: res.statusCode,
    });
  }

  const allspotBookings = await Booking.findAll({
    where: {
      spotId: booking.spotId,
    },
  });

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
          message: "Sorry, this spot is already booked for the specified dates",
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

  await booking.update({
    startDate,
    endDate,
  });

  res.json(booking);
});

router.delete("/:bookingId", requireAuth, async (req, res) => {
  let userId = req.user.id;
  const booking = await Booking.findByPk(req.params.bookingId);
  if (!booking) {
    res.status(404);
    res.json({
      message: "Booking couldn't be found",
      statusCode: res.statusCode,
    });
  }

  const spot = await Spot.findOne({
    where: {
      id: booking.spotId,
    },
  });

  if (new Date() > booking.startDate) {
    res.status(403);
    return res.json({
      message: "Bookings that have been started can't be deleted",
      statusCode: res.statusCode,
    });
  }
  if (userId !== booking.userId && userId !== spot.ownerId) {
    res.status(403);
    return res.json({
      message: "Unauthorized for such action!",
      statusCode: res.statusCode,
    });
  }

  booking.destroy();
  res.json({
    message: "Successfully deleted",
    statusCode: res.statusCode,
  });
});

module.exports = router;
