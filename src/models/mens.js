const mongoose = require("mongoose");

// creating a new mongoose schema for the mens athlete
const menSchema = new mongoose.Schema(
  {
    ranking: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    dob: {
      type: Date,
      required: true,
      trim: true,
    },
    event: {
      type: String,
      required: true,
      default: "swimming",
    },
  },
  {
    timestamps: true,
  }
);

// create the model: the collection
const menSwimmer = new mongoose.model("menSwimmer", menSchema);

// export
module.exports = menSwimmer;
