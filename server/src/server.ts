import express, { Express } from "express";

import cors from "cors";
import dotenv from "dotenv";
import { connectDb } from "./db/connectDB";

dotenv.config();

const app: Express = express();
connectDb();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>
  console.log("Server running on http://localhost:" + PORT)
);
