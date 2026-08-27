const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    buildingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Building",
      required: true,
    },

    roomNumber: {
      type: String,
      required: true,
    },

    floor: Number,

    roomType: String,

    capacity: Number,

    modelPath: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", roomSchema);