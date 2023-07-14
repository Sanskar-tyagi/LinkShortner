const mongoose = require("mongoose");
const urlSchema = new mongoose.Schema(
  {
    ShortID: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    VisitHistory: [{ timestamp: { type: Number } }],
  },
  { timestamps: true }
);

const URL = mongoose.model("url", urlSchema);

module.exports = URL;
