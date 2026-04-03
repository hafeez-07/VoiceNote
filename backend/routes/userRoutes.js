import express from "express";
import { protect } from "../middlewares/protect.js";
import { getUser, updateUser } from "../controllers/userController.js";
const router = express.Router();

router.get("/getUser", protect, getUser);
router.put("/updateUser", protect, updateUser);

export default router;
