import { Router } from "express";

import { search } from "../controllers/search.controller";

const searchRouter = Router();

searchRouter.get("/search", search);

export default searchRouter;
