// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const { restoreUser } = require("../../utils/auth.js");
const spotsRouter = require('./spots')
const reviewsRouter = require('./reviews')
const bookingsRouter = require('./bookings')
const spotImagesRouter = require('./spot-images')
router.post('/test', function(req, res) {
  res.json({ requestBody: req.body });
});

const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
router.get('/set-token-cookie', async (_req, res) => {
  const user = await User.findOne({
    where: {
      username: 'Demo-lition'
    }
  });
  setTokenCookie(res, user);
  return res.json({ user });
});

// GET /api/restore-user

router.use(restoreUser);

router.get(
  '/restore-user',
  (req, res) => {
    return res.json(req.user);
  }
  );


  const { requireAuth } = require('../../utils/auth.js');
  router.get(
    '/require-auth',
  requireAuth,
  (req, res) => {
    return res.json(req.user);
  }
  );

  router.use(restoreUser);

  router.use('/session', sessionRouter);

  router.use('/users', usersRouter);

  router.use('/spots', spotsRouter)

  router.use('/reviews', reviewsRouter)

  router.use('/bookings', bookingsRouter)

  router.use('/spot-images', spotImagesRouter)

  router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
  });



  router.use(restoreUser);
  module.exports = router;
