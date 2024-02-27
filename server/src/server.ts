import express, { Express } from "express";

import cors from "cors";
import dotenv from "dotenv";

import { connectDb } from "./db/connectDB";

import collectionRouter from "./routes/collection.route";
import notesRouter from "./routes/note.route";
import searchRouter from "./models/search.route";

dotenv.config();

const app: Express = express();
connectDb();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.use("/api/collection", collectionRouter);
app.use("/api/notes", notesRouter);
app.use("/api", searchRouter);

app.listen(PORT, () =>
  console.log("Server running on http://localhost:" + PORT)
);
