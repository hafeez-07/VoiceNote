import { body } from "express-validator";

export const registerValidation = [
  body("fullname")
    .trim()
    .notEmpty()
    .withMessage("Full name is required")
    .bail()
    .isLength({ min: 3 })
    .withMessage("Fullname must be at least 3 characters"),
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Username is required")
    .bail()
    .isLength({ min: 3, max: 20 })
    .withMessage("Username length must be 3-20 chars")
    .bail()
    .matches(/^[a-zA-Z0-9_]+$/)
    //frontend element must have class "whitespace-pre-line" to display new line
    .withMessage("Only letters ,numbers and underscore allowed \n Eg: John123"),
  body("email") //checks req.body.email
    .trim()
    .notEmpty()
    .withMessage("Email is required") //if it is empty , store error
    .bail() //if email is empty , don't check further , bail
    .isEmail()
    .withMessage("Invalid email")
    .normalizeEmail(), // removes dots , + , converts to lower case

  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password is required")
    .bail()
    .isLength({ min: 6 })
    .withMessage("Password length must be at least 6")
    .bail()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)
    .withMessage("must contain at least 1 uppercase ,1 lowercase and 1 number")
   
];

export const loginValidation = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .bail()
    .isEmail()
    .withMessage("Invalid email")
    .normalizeEmail(),

  body("password").trim().notEmpty().withMessage("Password is required"),
];
