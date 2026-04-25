import express from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
} from "../controllers/authController.js";
import {
  loginValidation,
  registerValidation,
} from "../validators/authValidator.js";
import { validate } from "../middlewares/validate.js";
const router = express.Router();

router.post("/register", registerValidation, validate, registerUser);
router.post("/login", loginValidation, validate, loginUser);
router.get("/logout", logoutUser);

export default router;
