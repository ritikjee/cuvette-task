import { Request, Response } from "express";

import NoteCollections from "../models/collection.model";

export async function getCollection(req: Request, res: Response) {
  try {
    const notecollections = await NoteCollections.find({}).select("-notes");

    return res.status(200).json(notecollections);
  } catch (error) {
    console.log("get-collection error", error);
    return res.status(500).json({ message: "Internal Server error" });
  }
}

export async function createCollection(req: Request, res: Response) {
  const { title } = req.body;

  if (!title) {
    return res
      .status(400)
      .json({ message: "Please provide title to create a Collection" });
  }

  try {
    const newCollection = await NoteCollections.create({
      title,
    });

    return res.status(201).json({ message: "Sucessfully created a todo" });
  } catch (error) {
    console.log("collection-creation error", error);
    return res.status(500).json({ message: "Internal Server error" });
  }
}

export async function deleteCollection(req: Request, res: Response) {
  const { collectionId } = req.query;

  if (!collectionId) {
    return res.status(400).json({
      message: "Please provide a collection id which need to be deleted",
    });
  }

  try {
    await NoteCollections.findByIdAndDelete(collectionId);
    return res.status(200).json({
      message: "Collection Deleted successfully",
    });
  } catch (error) {
    console.log("Delete Collection Error", error);
    return res.status(500).json({
      message: "Internal Server error",
    });
  }
}
