const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const questionRoutes = require('./routes/question.routes');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

mongoose.connect('mongodb://127.0.0.1:27017/interviewRecorder')
  .then(() => console.log('Mongo Connected'));

app.use('/api', questionRoutes);

app.listen(3000, () => console.log('Server running on 3000'));


// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const path = require("path");
// const topicRoutes = require("./routes/topicRoutes");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // MongoDB Connection
// mongoose
//   .connect("mongodb://127.0.0.1:27017/interviewRecorder")
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch(err => console.log("❌ Mongo Error:", err));

// // Routes
// app.use("/api", topicRoutes);

// app.listen(3000, () => {
//   console.log("🚀 Node Server running on port 3000");
// });
