import { Router } from "express";

import {
  createNoteInCollection,
  deleteNoteInCollection,
  getNotes,
} from "../controllers/notes.controller";

const notesRouter = Router();

notesRouter.get("/get-notes/:collectionId", getNotes);
notesRouter.post("/create-notes", createNoteInCollection);
notesRouter.delete("/delete-notes", deleteNoteInCollection);

export default notesRouter;
