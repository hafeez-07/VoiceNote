import express from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
} from "../controllers/authController.js";
import { registerValidation } from "../validators/authValidator.js";
import { validate } from "../middlewares/validate.js";
const router = express.Router();

router.post("/register", registerValidation, validate, registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);

export default router;
