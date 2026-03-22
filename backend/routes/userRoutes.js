import express from "express";
import { protect } from "../middlewares/protect.js";
import { getUser } from "../controllers/userController.js";
const router = express.Router();

router.get("/getUser", protect, getUser);

export default router;
