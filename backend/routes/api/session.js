// backend/routes/api/session.js
const express = require('express')
const router = express.Router();

const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { ValidationError } = require('sequelize');
// Log in
// router.post(
//     '/',
//     async (req, res, next) => {
//       const { credential, password } = req.body;
//       if(!credential) {
//         const err = new ValidationError('Email is required')
//         return next(err)
//       }

//       if(!password) {
//         res.status(400)
//         res.json({
//           "message": "Validation error",
//           "statusCode": res.statusCode,
//           "errors": {
//             "credential": "password is required"
//           }
//         })
//       }

//       const user = await User.login({ credential, password });

//       if (!user) {
//         // const err = new Error('Login failed');
//         // err.status = 401;
//         // err.title = 'Login failed';
//         // err.errors = ['The provided credentials were invalid.'];
//         // return next(err);
//         res.status(401)
//         res.json({
//           message: "Invalid credentials",
//           statusCode: 401
//         })
//       }

//       await setTokenCookie(res, user);

//       return res.json({
//         user
//       });
//     }
//   );


// Log out
router.delete(
    '/',
    (_req, res) => {
      res.clearCookie('token');
      return res.json({ message: 'success' });
    }
  );



// Restore session user
router.get(
  '/',
  requireAuth, restoreUser,
  (req, res) => {
    const { user } = req;
    if (user) {
      return res.json({
        // user: user.toSafeObject()
        "id": user.id,
        "firstName": user.firstName,
        "lastName": user.lastName,
        "email": user.email,
        "username": user.username

      });
    } else return res.json({});
  }
);

const validateLogin = [
  check('credential')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Email or username is required'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Password is required'),
  handleValidationErrors
];


// Log in
router.post(
  '/',
  validateLogin,
  async (req, res, next) => {
    const { credential, password } = req.body;
    // if(!credential) {
    //   const err = new ValidationError('Email or username is required')
    //   res.json(err)
    // }

    const user = await User.scope('currentUser').login({ credential, password });

    if (!user) {
      // const err = new Error('Login failed');
      // err.status = 401;
      // err.title = 'Login failed';
      // err.errors = ['The provided credentials were invalid.'];
      // return next(err);
      res.status(403)
      res.json({
        message: "Invalid credentials",
        statusCode: 401
      })
    }

    // const tokenCookiee = setTokenCookie(res, user);
    user.dataValues.token = setTokenCookie(res, user)
    return res.json(user);
  }
);







module.exports = router;
