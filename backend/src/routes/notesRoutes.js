import express from "express";
import { createNotes, deleteNotes, getAllNotes, updateNotes, getSpecificNotes } from "../controllers/notesController.js";
const router = express.Router();

router.get("/", getAllNotes)
router.get("/:id", getSpecificNotes)

router.post("/create",createNotes)

router.put("/:id",updateNotes)

router.delete("/:id",deleteNotes)

export default router;


//What is an endpoint?
//An endpoint is a combination of a URL + HTTP method that lets the client interact with a specific resource


