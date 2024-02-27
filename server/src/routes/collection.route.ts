import { Router } from "express";

import {
  createCollection,
  deleteCollection,
  getCollection,
  getCollectionById,
} from "../controllers/collection.controller";

const collectionRouter = Router();

collectionRouter.get("/get-collection", getCollection);
collectionRouter.get("/get-collection/:collectionId", getCollectionById);
collectionRouter.post("/create-collection", createCollection);
collectionRouter.delete("/delete-collection/:collectionId", deleteCollection);

export default collectionRouter;
