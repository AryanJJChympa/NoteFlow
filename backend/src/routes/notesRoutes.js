import express from "express";
import protect from "../middleware/authMiddleware.js";
import { createNotes, deleteNotes, getAllNotes, updateNotes, getSpecificNotes } from "../controllers/notesController.js";
const router = express.Router();

router.get("/", protect, getAllNotes)
router.get("/:id", protect, getSpecificNotes)

router.post("/create", protect, createNotes)

router.put("/:id", protect, updateNotes)

router.delete("/:id", protect, deleteNotes)

export default router;


//What is an endpoint?
//An endpoint is a combination of a URL + HTTP method that lets the client interact with a specific resource


