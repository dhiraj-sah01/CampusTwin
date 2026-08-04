import express from "express";
import Building from "../models/Building.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const { name } = req.query;

  const building = await Building.findOne({ name });

  res.json(building);
});

router.post("/", async (req, res) => {
  try {
    const building = new Building(req.body);
    await building.save();
    console.log(building);

    res.status(201).json(building);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;