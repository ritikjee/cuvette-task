import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    collection: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Collection",
    },
    color: {
      type: String,
      default: "yellow",
    },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
