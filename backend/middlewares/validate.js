import { validationResult } from "express-validator";

export const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const formattedErrors = {};
    console.log(errors.array());
    errors.array().forEach((err) => {
      //only take first error per field  , same as formattedError.email or password
      if (!formattedErrors[err.path]) {
        formattedErrors[err.path] = err.msg;
      }
    });
    return res.status(400).json({
      errors: formattedErrors,
    });
  }
  next();
};
