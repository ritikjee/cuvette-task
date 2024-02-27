import { Router } from "express";

import {
  createCollection,
  deleteCollection,
  getCollection,
} from "../controllers/collection.controller";

const collectionRouter = Router();

collectionRouter.get("/get-collection", getCollection);
collectionRouter.post("/create-collection", createCollection);
collectionRouter.delete("/delete-collection/:collectionId", deleteCollection);

export default collectionRouter;
