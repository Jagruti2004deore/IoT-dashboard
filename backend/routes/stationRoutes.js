const express = require("express");
const Station = require("../models/Station");
const Reading = require("../models/Reading");

const router = express.Router();

// GET all stations with their latest reading
router.get("/", async (req, res) => {
  try {
    const stations = await Station.find({});
    
    // Get latest reading per station
    const readings = await Reading.aggregate([
      { $sort: { timestamp: -1 } },
      { $group: { _id: "$stationId", latest: { $first: "$$ROOT" } } }
    ]);

    // Merge stations + latest readings
    const merged = stations.map(st => {
      const r = readings.find(x => x._id === st.stationId);
      return { ...st._doc, latestReading: r ? r.latest : null };
    });

    res.json(merged);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
