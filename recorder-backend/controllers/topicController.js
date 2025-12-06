const Topic = require("../models/topic");

// 1. Create a new Topic
exports.createTopic = async (req, res) => {
  const { category, subtopic } = req.body;

  const exists = await Topic.findOne({ category, subtopic });
  if (exists) {
    return res.status(400).json({ message: "Topic already exists" });
  }

  const topic = new Topic({ category, subtopic, attempts: [] });
  await topic.save();

  res.json({ message: "Topic Created", topic });
};

// 2. Add Attempt (audio/video upload)
exports.addAttempt = async (req, res) => {
  const { topicId, fileType } = req.body;
  const fileUrl = `http://localhost:3000/uploads/${req.file.filename}`;

  const topic = await Topic.findById(topicId);
  if (!topic) return res.status(404).json({ message: "Topic not found" });

  topic.attempts.push({
    fileUrl,
    fileType,
    date: new Date()
  });

  await topic.save();

  res.json({ message: "Attempt Added", topic });
};

// 3. Get all topics
exports.getTopics = async (req, res) => {
  const topics = await Topic.find();
  res.json(topics);
};

// 4. Get topic by ID (with attempts)
exports.getTopicById = async (req, res) => {
  const topic = await Topic.findById(req.params.id);
  res.json(topic);
};

// 5. Dashboard Feed (All attempts from all topics)
exports.getAllAttempts = async (req, res) => {
  const topics = await Topic.find();

  const feed = [];

  topics.forEach(t => {
    t.attempts.forEach(a => {
      feed.push({
        topicId: t._id,
        category: t.category,
        subtopic: t.subtopic,
        fileUrl: a.fileUrl,
        fileType: a.fileType,
        date: a.date
      });
    });
  });

  feed.sort((a, b) => new Date(b.date) - new Date(a.date));

  res.json(feed);
};
