const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema(
  {
    componentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Component",
      required: true,
    },

    reportedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    title: String,

    description: String,

    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },

    status: {
      type: String,
      enum: ["open", "assigned", "in-progress", "resolved"],
      default: "open",
    },

    assignedTechnician: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Issue", issueSchema);