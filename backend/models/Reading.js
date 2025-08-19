const mongoose = require("mongoose");

const readingSchema = new mongoose.Schema({
  stationId: String,
  timestamp: { type: Date, default: Date.now },
  temperature: Number,
  humidity: Number,
  status: { type: String, enum: ["Active", "Inactive"] },
  lastSeen: String
});

module.exports = mongoose.model("Reading", readingSchema);
