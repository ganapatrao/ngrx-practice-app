const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const topicRoutes = require("./routes/topicRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/interviewRecorder")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ Mongo Error:", err));

// Routes
app.use("/api", topicRoutes);

app.listen(3000, () => {
  console.log("🚀 Node Server running on port 3000");
});
