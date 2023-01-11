// backend/utils/validation.js
const { validationResult } = require('express-validator');

// middleware for formatting errors from express-validator middleware
// (to customize, see express-validator's documentation)
const handleValidationErrors = (req, _res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    const errors = validationErrors
    .array()
    .map((error) => `${error.msg}`);
    console.log('================',errors)
    const err = Error('Validation Error');
    err.errors = errors;
    err.message = errors[0]
    err.status = 400;
    next(err);
  }
  next();
};

// const handleBookingTimeError = (req, _res, next) => {
//   const validationErrors = validationResult(req);

//   if (!validationErrors.isEmpty()) {
//     const errors = validationErrors
//       .array()
//       .map((error) => `${error.msg}`);

//     const err = Error('Bad request.');
//     err.errors = errors;
//     err.status = 400;
//     // err.title = 'Bad request.';
//     next(err);
//   }
//   next();
// };




module.exports = {
  handleValidationErrors
};
