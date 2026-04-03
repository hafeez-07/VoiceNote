import express from "express";
import { protect } from "../middlewares/protect.js";
import {
  getUser,
  updateUser,
  uploadImage,
} from "../controllers/userController.js";
import upload from "../middlewares/upload.js";
const router = express.Router();

router.get("/getUser", protect, getUser);
router.put("/updateUser", protect, updateUser);
router.post("/upload", protect, upload.single("profile"), uploadImage);

export default router;
