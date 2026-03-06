import express from "express";
const router = express.Router();

import {
  addNote,
  deleteNote,
  getAllNotes,
  getHome,
  getNote,
  updateNote,
} from "../controllers/notesController.js";

router.get("/", getHome);
router.post("/add", addNote);
router.put("/update/:id", updateNote);
router.delete("/delete/:id", deleteNote);
router.get("/read", getAllNotes);
router.get("/read/:id", getNote);

export default router;
