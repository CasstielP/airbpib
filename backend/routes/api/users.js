// backend/routes/api/users.js
const express = require('express')

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// router.post(
//     '/',
//     async (req, res) => {
//       const { email, password, username } = req.body;
//       const user = await User.signup({ email, username, password });

//       await setTokenCookie(res, user);

//       return res.json({
//         user
//       });
//     }
//   );

  const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Ivalid email.'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Username is required'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
      check('firstName')
      .exists({checkFalsy: true})
      .withMessage('First name is required'),
      check('lastName')
      .exists({checkFalsy: true})
      .withMessage('Last name is required'),
    handleValidationErrors
  ];


// Sign up
router.post(
  '/',
  validateSignup,
  async (req, res) => {
    const { firstName, lastName, email, username, password} = req.body;




    const existEmail = await User.findOne({
      where:{
        email: email
      }
    })
    const existUsername = await User.findOne({
      where: {
        username: username
      }
    })
    if(existEmail) {
      res.status(403)
      res.json({
        message: "User already exists",
        statusCode: res.statusCode,
        errors: {
          email: "User with that email already exists"
        }
      })
    }
    if(existUsername) {
      res.status(403)
      res.json({
        message: "User already exists",
        statusCode: res.statusCode,
        errors: {
          email: "User with that username already exists"
        }
      })
    }




    const user = await User.signup({firstName, lastName, email, username, password });

    await setTokenCookie(res, user);

    return res.json({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: ""
    });
  }
);




module.exports = router;
