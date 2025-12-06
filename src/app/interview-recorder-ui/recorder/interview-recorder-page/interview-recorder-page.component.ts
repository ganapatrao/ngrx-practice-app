import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Simple Interfaces
interface Attempt {
  fileType: 'audio' | 'video' | 'screen';
  fileUrl: string;
  date: Date;
}

interface Question {
  _id: string;
  topic: string;
  questionText: string;
  answerText: string;
  attempts: Attempt[];
}

@Component({
  selector: 'app-interview-recorder-page',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './interview-recorder-page.component.html',
  styleUrl: './interview-recorder-page.component.css'
})
export class InterviewRecorderPageComponent {
  // -----------------------------------------
  // DUMMY DATA (Just to see UI working)
  // -----------------------------------------
  categories: string[] = ['JS', 'Angular', 'Node + Express'];
  selectedCategory: string | null = 'JS';

  questions: Question[] = [
    {
      _id: '1',
      topic: 'let',
      questionText: 'What is let?',
      answerText: 'let is block scoped.',
      attempts: [
        {
          fileType: 'audio',
          fileUrl: '',
          date: new Date()
        }
      ]
    },
    {
      _id: '2',
      topic: 'const',
      questionText: 'Difference between let and const?',
      answerText: 'const cannot be reassigned.',
      attempts: []
    }
  ];

  // -----------------------------------------
  // ADD CATEGORY
  // -----------------------------------------
  newCategoryName = '';

  addCategory() {
    if (!this.newCategoryName.trim()) return;

    this.categories.push(this.newCategoryName.trim());
    this.selectedCategory = this.newCategoryName.trim();
    this.newCategoryName = '';
    this.questions = []; // reset visible questions
  }

  onSelectCategory(cat: string) {
    this.selectedCategory = cat;

    // In real backend: fetch questions for this category
    this.questions = []; // for now, empty on category switch
  }

  // -----------------------------------------
  // ADD NEW QUESTION
  // -----------------------------------------
  newQuestion = {
    topic: '',
    questionText: '',
    answerText: ''
  };

  addQuestion() {
    if (!this.newQuestion.topic || !this.newQuestion.questionText) return;

    const q: Question = {
      _id: Math.random().toString(),
      topic: this.newQuestion.topic,
      questionText: this.newQuestion.questionText,
      answerText: this.newQuestion.answerText,
      attempts: []
    };

    this.questions.push(q);

    // Reset form
    this.newQuestion = { topic: '', questionText: '', answerText: '' };
  }

  // -----------------------------------------
  // SAVE ANSWER (Editable textarea)
  // -----------------------------------------
  saveAnswer(q: Question) {
    console.log('Answer saved:', q.answerText);
    // Later: call backend PATCH update
  }

  // -----------------------------------------
  // DELETE QUESTION
  // -----------------------------------------
  deleteQuestion(q: Question) {
    if (!confirm('Delete this question?')) return;
    this.questions = this.questions.filter(x => x._id !== q._id);
  }

  // -----------------------------------------
  // ATTEMPTS (Dummy for now)
  // -----------------------------------------
  deleteAttempt(q: Question, attempt: Attempt) {
    q.attempts = q.attempts.filter(a => a !== attempt);
  }

  // -----------------------------------------
  // RECORDING PLACEHOLDERS
  // -----------------------------------------
  currentPreview: any = null;

  startRecording(q: Question, type: 'audio' | 'video' | 'screen') {
    alert('Recording UI will come here. For now, showing preview block.');
    this.currentPreview = {
      questionId: q._id,
      type,
      url: '' // later blob url
    };
  }

  saveRecording(q: Question) {
    alert('Saving recording attempt (dummy).');

    q.attempts.push({
      fileType: this.currentPreview.type,
      fileUrl: '',
      date: new Date()
    });

    this.currentPreview = null;
  }

  cancelPreview() {
    this.currentPreview = null;
  }
}
