const express = require('express');
const router = express.Router();
const Question = require('../models/question.model');
const multer = require('multer');

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '.webm')
});
const upload = multer({ storage });


// ---------------------------------------------
// 1. GET Categories
// ---------------------------------------------
router.get('/categories', async (req, res) => {
  const cats = await Question.distinct('category');
  res.json(cats);
});

// ---------------------------------------------
// 2. Add Category (just send string)
// ---------------------------------------------
router.post('/categories', async (req, res) => {
  res.json({ category: req.body.category });
});

// ---------------------------------------------
// 3. Get Questions by Category
// ---------------------------------------------
router.get('/questions/:category', async (req, res) => {
  const list = await Question.find({ category: req.params.category });
  res.json(list);
});

// ---------------------------------------------
// 4. Add New Question
// ---------------------------------------------
router.post('/question', async (req, res) => {
  const q = await Question.create(req.body);
  res.json(q);
});

// ---------------------------------------------
// 5. Update Answer Text
// ---------------------------------------------
router.patch('/question/:id', async (req, res) => {
  const updated = await Question.findByIdAndUpdate(
    req.params.id,
    { answerText: req.body.answerText },
    { new: true }
  );
  res.json(updated);
});

// ---------------------------------------------
// 6. Delete Question
// ---------------------------------------------
router.delete('/question/:id', async (req, res) => {
  await Question.findByIdAndDelete(req.params.id);
  res.json({ message: 'Question deleted' });
});

// ---------------------------------------------
// 7. Upload Attempt (audio/video/screen)
// ---------------------------------------------
router.post('/question/:id/attempt', upload.single('file'), async (req, res) => {
  const q = await Question.findById(req.params.id);

  q.attempts.push({
    fileType: req.body.fileType,
    fileUrl: `http://localhost:3000/uploads/${req.file.filename}`
  });

  await q.save();
  res.json(q);
});

// ---------------------------------------------
// 8. Delete Attempt
// ---------------------------------------------
router.delete('/question/:questionId/attempt/:attemptId', async (req, res) => {
  const { questionId, attemptId } = req.params;
  
  const q = await Question.findById(questionId);
  q.attempts = q.attempts.filter(a => a._id.toString() !== attemptId);

  await q.save();
  res.json(q);
});

module.exports = router;
