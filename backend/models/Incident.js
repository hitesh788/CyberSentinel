const mongoose = require("mongoose");

const IncidentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    source: {
      type: String,
      default: "Internal Feed",
    },
    severity: {
      type: String,
      enum: ["Low", "Medium", "High", "Critical"],
      default: "Medium",
    },
    sector: {
      type: String,
      default: "General",
    },
    attackType: {
      type: String,
      default: "Unknown",
    },
    description: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      default: "India",
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Incident", IncidentSchema);