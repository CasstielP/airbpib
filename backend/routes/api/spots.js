const express = require('express')

const { setTokenCookie, requireAuth } = require('../../utils/auth');
// const { User } = require('../../db/models');
const {Review, SpotImage, User, sequelize} = require('../../db/models')
const {Spot} = require('../../db/models')

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

router.get('/', async (req, res)=> {
   const spots = await Spot.findAll({
    include: {
        model: Review,
        attributes:[]
    }
   })

   for(let i=0; i<spots.length; i++) {
    let spot = spots[i]
    let count = await Review.sum('stars', {
        where: {
            spotId: spot.id
        }
    })
    let total = await Review.count({
        where: {
            spotId: spot.id
        }
    })
    spot.dataValues.avgRating=count/total;
    spot.dataValues.previewImage= await SpotImage.findOne({
        where:{
            spotId: spot.id,
            preview: true
        },
        attributes:['url']
    })
   }


    res.json(spots)
})


const validateNewSpot = [
    check('address')
        .exists({checkFalsy: true})
        .withMessage('street address is required'),
    check('city')
        .exists({checkFalsy: true})
        .withMessage('city is required'),
    check('state')
        .exists({checkFalsy: true})
        .withMessage('state is required'),
    check('country')
        .exists({checkFalsy: true})
        .withMessage('country is required'),
    check('lat')
        .exists({checkFalsy: true})
        .withMessage('latitude is not valid'),
    check('lng')
        .exists({checkFalsy: true})
        .withMessage('longtitude is not valid'),
    check('name')
        .exists({checkFalsy: true})
        .isLength({max: 49})
        .withMessage('name must be less than 50 characters'),
    check('description')
        .exists({checkFalsy: true})
        .withMessage('description is required'),
    check('price')
        .exists({checkFalsy: true})
        .withMessage('price per day is required'),
    handleValidationErrors
]

router.post('/', validateNewSpot, requireAuth, async (req, res)=> {
    const{address, city, state, country,lat,
        lng, name, description, price} = req.body
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
        price
    })
    res.status(201)
    res.json(newSpot)

})


router.post('/:spotId/images', requireAuth, async (req, res)=> {
    let userId = req.user.id
    const spot = await Spot.findByPk(req.params.spotId)
    if(!spot) {
        res.status(404)//not found
        res.json({
            message:"Spot couldn't be found",
            statusCode: res.statusCode
        })
    }
    if(userId !== spot.ownerId){
        res.status(401) //unauthorized
       return res.json('user doesnt have credential to add image')
    }


    const {url, preview} = req.body;


    const newSpotImg = await SpotImage.create({
        spotId: spot.id,
        url,
        preview
    })

    return res.json(newSpotImg)

})

router.get('/current', requireAuth, async (req, res)=> {
    let userId = req.user.id
    const userSpots = await Spot.findAll({
        where:{
            ownerId: userId
        },
        include: {
            model: Review,
            attributes:[]
        }
    })

    for(let i=0; i<userSpots.length; i++) {
        let spot = userSpots[i]
        let count = await Review.sum('stars', {
            where: {
                spotId: spot.id
            }
        })
        let total = await Review.count({
            where: {
                spotId: spot.id
            }
        })
        spot.dataValues.avgRating=count/total;
        spot.dataValues.previewImage= await SpotImage.findOne({
            where:{
                spotId: spot.id,
                preview: true
            },
            attributes:['url']
        })
       }

    return res.json(userSpots)
})


router.get('/:spotId', async (req, res)=> {
    const userSpot = await Spot.findByPk(req.params.spotId, {
        include: [
            {
            model: SpotImage,
            as: 'SpotImages',
            attributes:['id','url', 'preview']
            },
            {
            model: User,
            // as: 'Owner',
            attributes: ['id','firstName', 'lastName']
            }
        ]
    })
    if(!userSpot) {
        res.status(404)
        res.json({
            "message": "Spot couldn't be found",
            "statusCode": res.statusCode
        })
    }

        let count = await Review.sum('stars', {
            where: {
                spotId: userSpot.id
            }
        })
        let total = await Review.count({
            where: {
                spotId: userSpot.id
            }
        })
        userSpot.dataValues.avgRating=count/total;
        userSpot.dataValues.previewImage= await SpotImage.findOne({
            where:{
                spotId: userSpot.id,
                preview: true
            },
            attributes:['url']
        })


       res.json(userSpot)
})


const validateEditSpot = [
    check('address')
        .exists({checkFalsy: true})
        .withMessage('Street address is required'),
    check('city')
        .exists({checkFalsy: true})
        .withMessage('City is required'),
    check('State')
        .exists({checkFalsy: true})
        .withMessage('State is required'),
    check('country')
        .exists({checkFalsy: true})
        .withMessage('Country is required'),
    check('lat')
        .exists({checkFalsy: true})
        .withMessage('Latitude is not valid'),
    check('lng')
        .exists({checkFalsy: true})
        .withMessage('Longtitude is not valid'),
    check('name')
        .exists({checkFalsy: true})
        .isLength({max:49})
        .withMessage('Name must be less than 50 characters'),
    check('description')
        .exists({checkFalsy: true})
        .withMessage('Description is required'),
    check('price')
        .exists({checkFalsy: true})
        .withMessage('Price per day is required'),
    handleValidationErrors
]



router.put('/:spotId', validateEditSpot, requireAuth, async (req, res)=> {
    const {address, city, state, country, lat, lng,
            name, description, price} = req.body
    const spot = await Spot.findByPk(req.params.spotId)
    if(!spot){
        res.status(404)
        return res.json({
            "message": "Spot couldn't be found",
            "statusCode": res.statusCode
        })
    }
    const userId = req.user.id
    if(userId !== spot.ownerId){
        res.status(401)
        return res.json({
            message: 'unauthorized for such action!',
            statusCode: res.statusCode
        })
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
        price
    })
    return res.json(spot)
})

router.delete('/:spotId', requireAuth, async (req, res)=> {
    const spot = await Spot.findByPk(req.params.spotId)
    if(!spot) {
        res.status(404)
        return res.json({
            "message": "Spot couldn't be found",
            "statusCode": res.statusCode
        })
    }
    const userId = req.user.id
    if(userId !== spot.ownerId){
        res.status(401) //unauthorized
       return res.json('unauthorized for such action!')
    }

    await spot.destroy()
    res.status(200)
    res.json({
        "message": "Successfully deleted",
        "statusCode": res.statusCode
    })
})


module.exports = router;
