const express = require("express");
const router = express.Router();
const topicController = require("../controllers/topicController");
const multer = require("multer");
const path = require("path");

// Multer Config
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname) || ".webm");
  }
});
const upload = multer({ storage });

// Routes
router.post("/topic", topicController.createTopic);

router.get("/topics", topicController.getTopics);
router.get("/topic/:id", topicController.getTopicById);

// Upload Attempt (audio/video)
router.post("/attempt", upload.single("file"), topicController.addAttempt);

// Dashboard Feed (All attempts)
router.get("/feed", topicController.getAllAttempts);

module.exports = router;
