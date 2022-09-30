const express = require('express')

const { setTokenCookie, requireAuth } = require('../../utils/auth');

const {Review, SpotImage, ReviewImage, User, sequelize} = require('../../db/models')
const {Spot} = require('../../db/models')

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();


router.post('/:reviewId/images', requireAuth, async (req, res)=> {
    const {url} = req.body
    const userId = req.user.id

    const review = await Review.findByPk(req.params.reviewId)


    if(!review) {
        res.status(404)
        return res.json({
            "message": "Review couldn't be found",
            "statusCode": res.statusCode
        })
    }
    if(userId !== review.userId){
        res.status(403)
        res.json({
            message: 'Unauthorized for such action',
            statusCode: res.statusCode
        })
    }


    const reviewImgs = await ReviewImage.findAll({
        where: {
            reviewId: req.params.reviewId
        }
    })

    if(reviewImgs.length === 10) {
        res.status(403)
        res.json({
            "message": "Maximum number of images for this resource was reached",
            "statusCode": res.statusCode
        })
    }



    const newRvImg = await ReviewImage.create({
        reviewId: req.params.reviewId,
        url
    })

    res.json({
        id: newRvImg.id,
        url
    })

})




router.get('/current', requireAuth, async(req, res) => {
    const allReviews = await Review.findAll({
        where: {
            userId: req.user.id
        },
        include: [
            {model: User},
            {model: Spot},
            {model: ReviewImage}
        ]
    })

    res.json({
        Reviews: allReviews
    })
})



router.get('/:spotId/reviews', async (req, res)=> {
    const spot = await Spot.findByPk(req.params.spotId)
    if(!spot) {
        res.status(404)
        res.json({
            "message": "Spot couldn't be found",
            "statusCode": res.statusCode
        })
    }

    const reviews = await Review.findAll({
        where: {
            spotId: req.params.spotId
        },
        include: [
            {model: User},
            {model: ReviewImage}
        ]
    })
    res.json(reviews)

})



const validateEditReview = [
    check('review')
        .exists({checkFalsy: true})
        .withMessage('review text is required'),
    check('stars')
        .exists({checkFalsy: true})
        .isInt()
        .custom((value)=> {
            if(value >=1 && value <=5){return true}
            else false
        })
        .withMessage('stars must be an integer from 1 to 5'),
        handleValidationErrors
]

router.put('/:reviewId', validateEditReview, requireAuth, async (req, res)=> {
    let userId = req.user.id
    const {review, stars} = req.body;
    const Editreview = await Review.findByPk(req.params.reviewId)
    if(!Editreview) {
        res.status(404)
        res.json({
            "message": "Review couldn't be found",
            "statusCode": res.statusCode
        })
    }
    if(userId !== Editreview.userId) {
        res.status(403)
        res.json({
            message: 'unauthorized for such action',
            statusCode: res.statusCode
        })
    }

    await Editreview.update({
        review,
        stars
    })

    res.json(Editreview)

})




router.delete('/:reviewId', requireAuth, async (req, res)=> {
    const userId = req.user.id
    const review  = await Review.findByPk(req.params.reviewId)
    if(!review) {

        res.status(404)
        res.json({
            "message": "Review couldn't be found",
            "statusCode": res.statusCode
        })
    }
    if(userId !== review.userId){

        res.status(403)
        res.json({
            message: 'Unauthorized for such action!',
            statusCode: res.statusCode
        })
    }
    review.destroy();
    res.json({
        "message": "Successfully deleted",
        "statusCode": res.statusCode
    })


})

module.exports = router;
