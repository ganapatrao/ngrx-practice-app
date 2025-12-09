import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InterviewService } from '../recorder/interview.service';
import { Attempt, Question } from '../models/question.model';


@Component({
  selector: 'app-interview-recorder-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './interview-recorder-page.component.html',
  styleUrl: './interview-recorder-page.component.css'
})
export class InterviewRecorderPageComponent implements OnInit {

  constructor(private service: InterviewService) {}

  categories: string[] = [];
  selectedCategory: string | null = null;

  questions: Question[] = [];

  newCategoryName = '';

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.service.getCategories().subscribe(res => {
      this.categories = res;

      if (!this.selectedCategory && res.length > 0) {
        this.selectedCategory = res[0];
        this.loadQuestions(res[0]);
      }
    });
  }

  addCategory() {
    if (!this.newCategoryName.trim()) return;

    this.service.addCategory(this.newCategoryName).subscribe(() => {
      this.categories.push(this.newCategoryName.trim());
      this.selectedCategory = this.newCategoryName.trim();
      this.newCategoryName = '';
      this.questions = [];
    });
  }

  onSelectCategory(cat: string) {
    this.selectedCategory = cat;
    this.loadQuestions(cat);
  }

  loadQuestions(category: string) {
    this.service.getQuestions(category).subscribe((res: Question[]) => {
      this.questions = res;
    });
  }

  newQuestion = {
    topic: '',
    questionText: '',
    answerText: ''
  };

  addQuestion() {
    if (!this.selectedCategory) return;
    if (!this.newQuestion.topic || !this.newQuestion.questionText) return;

    const payload = {
      category: this.selectedCategory,
      topic: this.newQuestion.topic,
      questionText: this.newQuestion.questionText,
      answerText: this.newQuestion.answerText
    };

    this.service.addQuestion(payload).subscribe(q => {
      this.questions.push(q);
      this.newQuestion = { topic: '', questionText: '', answerText: '' };
    });
  }

  saveAnswer(q: Question) {
    this.service.saveAnswer(q._id, q.answerText).subscribe(() => {
      console.log('Answer saved');
    });
  }

  deleteQuestion(q: Question) {
    if (!confirm('Delete this question?')) return;

    this.service.deleteQuestion(q._id).subscribe(() => {
      this.questions = this.questions.filter(x => x._id !== q._id);
    });
  }

  deleteAttempt(q: Question, attempt: Attempt) {
    if (!attempt._id) {
      q.attempts = q.attempts.filter(a => a !== attempt);
      return;
    }

    this.service.deleteAttempt(q._id, attempt._id).subscribe(updated => {
      q.attempts = updated.attempts;
    });
  }

  currentPreview: any = null;

  startRecording(q: Question, type: 'audio' | 'video' | 'screen') {
    alert('Recording UI will be added in Phase 3.');
    this.currentPreview = {
      questionId: q._id,
      type,
      blob: null,
      url: null
    };
  }

  saveRecording(q: Question) {
    alert('Saving attempt (Phase 3 will handle real upload).');

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
