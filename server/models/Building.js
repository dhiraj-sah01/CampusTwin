const mongoose = require("mongoose");

const buildingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    block: String,

    floors: Number,

    modelPath: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Building", buildingSchema);