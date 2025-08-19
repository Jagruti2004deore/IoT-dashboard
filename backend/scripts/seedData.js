require("dotenv").config();
const mongoose = require("mongoose");
const Station = require("../models/Station");
const Reading = require("../models/Reading");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB Atlas connected ✅"))
.catch(err => console.error("MongoDB connection error:", err));

async function seed() {
  await Station.deleteMany();
  await Reading.deleteMany();

  for (let i = 1; i <= 200; i++) {
    const id = `F${i}`;
    const status = Math.random() > 0.2 ? "Active" : "Inactive";

    const station = new Station({
      stationId: id,
      name: `Fuel Station ${id}`,
      status,
      location: { lat: 20 + Math.random() * 10, lon: 70 + Math.random() * 10 }
    });
    await station.save();

    const reading = new Reading({
      stationId: id,
      temperature: (30 + Math.random() * 10).toFixed(1),
      humidity: (50 + Math.random() * 30).toFixed(1),
      status,
      lastSeen: `${Math.floor(Math.random() * 5) + 1} minutes ago`
    });
    await reading.save();
  }

  console.log("Dummy data generated ✅");
  mongoose.connection.close();
}

seed();
