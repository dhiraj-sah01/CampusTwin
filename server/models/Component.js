const mongoose = require("mongoose");

const componentSchema = new mongoose.Schema(
  {
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },

    name: String,

    type: {
      type: String,
      enum: ["fan", "light", "projector", "ac", "bench", "other"],
    },

    // This connects MongoDB with your GLB model
    modelObjectName: String,

    status: {
      type: String,
      enum: ["working", "damaged", "under-maintenance"],
      default: "working",
    },

    maintenanceRequired: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Component", componentSchema);