const express = require('express')

const { setTokenCookie, requireAuth } = require('../../utils/auth');

const {Review, SpotImage, ReviewImage, User, Booking, sequelize} = require('../../db/models')
const {Spot} = require('../../db/models')

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();


router.delete('/:imageId', requireAuth, async (req, res)=> {
    let userId = req.user.id
    const image = await SpotImage.findByPk(req.params.imageId)
    if(!image) {
        res.status(404)
        res.json({
            "message": "Spot Image couldn't be found",
            "statusCode": res.statusCode
        })
    }
    const spot = await Spot.findOne({
        where: {
            id: image.spotId
        }
    })

    if(userId !== spot.ownerId) {
        res.status(401)
        res.json({
            message: 'Unauthorized for such action!',
            statusCode: res.statusCode
        })
    }

    await image.destroy()
    res.json({
        "message": "Successfully deleted",
        "statusCode": res.statusCode
    })

})



module.exports = router;
