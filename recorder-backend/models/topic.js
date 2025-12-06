const mongoose = require("mongoose");

const AttemptSchema = new mongoose.Schema({
  fileUrl: String,
  fileType: String, // "audio" or "video"
  date: { type: Date, default: Date.now }
});

const TopicSchema = new mongoose.Schema({
  category: { type: String, required: true },
  subtopic: { type: String, required: true },
  attempts: [AttemptSchema]
});

module.exports = mongoose.model("Topic", TopicSchema);
