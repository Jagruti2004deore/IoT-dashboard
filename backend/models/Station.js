const mongoose = require("mongoose");

const stationSchema = new mongoose.Schema({
  stationId: String,
  name: String,
  status: { type: String, enum: ["Active", "Inactive"] },
  location: {
    lat: Number,
    lon: Number
  }
});

module.exports = mongoose.model("Station", stationSchema);
