const express = require('express')

const { setTokenCookie, requireAuth } = require('../../utils/auth');

const {Review, SpotImage, ReviewImage, User, Booking, sequelize} = require('../../db/models')
const {Spot} = require('../../db/models')

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();










router.get('/current', requireAuth, async (req, res)=> {
    let userId = req.user.id
    const bookings = await Booking.findAll({
        where: {
            userId: userId
        },
        include: {model: Spot}
    })
    res.json(bookings)
})


const validateDates = [
    check('endDate')
        .custom((endate, {req})=> {
            if(new Date(endate) < new Date(startDate)){
               return false
            }
        })
        .withMessage('endDate cannot be on or before startDate'),
        handleValidationErrors
]
router.put('/:bookingId', requireAuth,  async (req, res)=> {
    let userId = req.user.id
    const {startDate, endDate} = req.body
    const booking = await Booking.findByPk(req.params.bookingId)
    if(!booking){
        res.status(404)
        res.json({
            "message": "Booking couldn't be found",
            "statusCode": res.statusCode
        })
    }

    if(userId !== booking.userId) {
        res.status(401)
        res.json({
            message: 'Unauthorized for such action!',
            statusCode: res.statusCode
        })
    }

    if(new Date(endDate) > booking.endDate) {
        res.status(403)
        res.json({
            "message": "Past bookings can't be modified",
            "statusCode": res.statusCode
        })
    }

    await booking.update({
        startDate,
        endDate
    })

    res.json(booking)

})




router.delete('/:bookingId', requireAuth, async (req, res)=> {
    let userId = req.user.id
    const booking = await Booking.findByPk(req.params.bookingId)
    const spot = await Spot.findOne({
        where:{
            id: booking.spotId
        }
    })
    if(!booking) {
        res.status(404)
        res.json({
            "message": "Booking couldn't be found",
            "statusCode": res.statusCode
        })
    }
    if(userId !== booking.userId || userId !== spot.ownerId) {
        res.status(401)
        res.json({
            message: 'Unauthorized for such action!',
            statusCode: res.statusCode
        })
    }

    let currentDate = new Date()
    if(currentDate > booking.startDate){
        res.status(403)
        res.json({
            "message": "Bookings that have been started can't be deleted",
            "statusCode": res.statusCode
        })
    }


    await booking.destroy()
    res.json({
        "message": "Successfully deleted",
        "statusCode": res.statusCode
    })

})



module.exports = router;
