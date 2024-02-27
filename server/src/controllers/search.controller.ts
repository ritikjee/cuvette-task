import { Request, Response } from "express";

import NoteCollections from "../models/collection.model";
import Note from "../models/note.model";

export async function search(req: Request, res: Response) {
  try {
    if (!req.query.search) {
      return res.status(400).json({ message: "Please provide search query" });
    }

    const searchResultsCollection = await NoteCollections.find({
      title: { $regex: req.query.search, $options: "i" },
    });

    const searchResultsNotes = await Note.find({
      description: { $regex: req.query.search, $options: "i" },
    });

    return res.status(200).json({
      Collections: searchResultsCollection,
      Notes: searchResultsNotes,
    });
  } catch (error) {
    console.log("search error", error);
    return res.status(500).json({ message: "Internal Server error" });
  }
}
