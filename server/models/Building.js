import mongoose from "mongoose";

const buildingSchema = new mongoose.Schema({
    name: String,
    location: [Number],
    floors: Number,
    block: String,
    coordinates: [[Number]]
});

export default mongoose.model("Building", buildingSchema);