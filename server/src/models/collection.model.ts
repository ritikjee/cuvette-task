import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      min: [3, "Title must contain atleast 3 character"],
      max: [20, "Title must be atmost 20 character long"],
    },
    notes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Note",
      },
    ],
  },

  { timestamps: true }
);

const NoteCollections = mongoose.model("NoteCollections", collectionSchema);

export default NoteCollections;
