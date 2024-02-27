import { Request, Response } from "express";

import NoteCollections from "../models/collection.model";
import Note from "../models/note.model";

export async function getNotes(req: Request, res: Response) {
  const { collectionId } = req.params;

  if (!collectionId) {
    return res
      .status(400)
      .json({ message: "Please provide collectionId to get notes" });
  }

  try {
    const collection = await NoteCollections.findById(collectionId).populate(
      "notes"
    );

    if (!collection) {
      return res.status(404).json({ message: "Collection not found" });
    }

    const notes = collection.notes;

    return res.status(200).json(notes);
  } catch (error) {
    console.log("get-notes error", error);
    return res.status(500).json({ message: "Internal Server error" });
  }
}

export async function createNoteInCollection(req: Request, res: Response) {
  const { description, collectionId } = req.body;

  if (!description || !collectionId) {
    return res.status(400).json({
      message: "Please provide description and collectionId to create a Note",
    });
  }

  try {
    const collection = await NoteCollections.findById(collectionId);

    if (!collection) {
      return res.status(404).json({ message: "Collection not found" });
    }

    const note = await Note.create({
      description,
      collection: collectionId,
    });

    collection.notes.push(note._id);

    await collection.save();

    return res.status(201).json(note);
  } catch (error) {
    console.log("note-creation error", error);
    return res.status(500).json({ message: "Internal Server error" });
  }
}

export async function deleteNoteInCollection(req: Request, res: Response) {
  const { noteId, collectionId } = req.body;

  if (!noteId || !collectionId) {
    return res.status(400).json({
      message: "Please provide noteId and collectionId to delete a Note",
    });
  }

  try {
    await Note.findByIdAndDelete(noteId);

    const collection = await NoteCollections.findById(collectionId);

    if (!collection) {
      return res.status(404).json({ message: "Collection not found" });
    }

    collection.notes = collection.notes.filter(
      (note) => note.toString() !== noteId
    );

    await collection.save();

    return res.status(200).json({ message: "Note Deleted successfully" });
  } catch (error) {
    console.log("Delete Note Error", error);
    return res.status(500).json({ message: "Internal Server error" });
  }
}
