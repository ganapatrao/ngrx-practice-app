const mongoose = require('mongoose');

const AttemptSchema = new mongoose.Schema({
  fileType: { type: String, enum: ['audio', 'video', 'screen'], required: true },
  fileUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const QuestionSchema = new mongoose.Schema({
  category: { type: String, required: true },
  topic: { type: String, required: true },
  questionText: { type: String, required: true },
  answerText: { type: String, default: '' },
  attempts: [AttemptSchema]
});

module.exports = mongoose.model('Question', QuestionSchema);
