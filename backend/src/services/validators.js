const Joi = require("joi");

const userSchema = Joi.object({
  firstname: Joi.string().max(50).required().messages({
    "any.required": "Firstname cannot be empty",
    "string.max": "Firstname should be less than 50 characters",
  }),
  lastname: Joi.string().max(50).required().messages({
    "any.required": "Lastname cannot be empty",
    "string.max": "Lastname should be less than 50 characters",
  }),
  age: Joi.number().required().messages({
    "any.required": "Age cannot be empty",
  }),
  campus: Joi.string().max(255).required().messages({
    "any.required": "Campus cannot be empty",
    "string.max": "Campus should be less than 255 characters",
  }),
  profilePicture: Joi.string().max(150).messages({
    "string.max": "Campus should be less than 150 characters",
  }),
  email: Joi.string().email().max(255).required().messages({
    "any.required": "Email cannot be empty",
    "string.max": "Email should be less than 255 characters",
    "string.email": "Email should be a valid format",
  }),
});

const validateUser = (req, res, next) => {
  const {
    firstname,
    lastname,
    age,
    campus,
    profile_picture: profilePicture,
    email,
  } = req.body;

  const { error } = userSchema.validate(
    { firstname, lastname, age, campus, profilePicture, email },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = {
  validateUser,
};
