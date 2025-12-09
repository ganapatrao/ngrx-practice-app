import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../models/question.model';


@Injectable({ providedIn: 'root' })
export class InterviewService {

  http = inject(HttpClient);
  api = 'http://localhost:3000/api';

  getCategories() {
    return this.http.get<string[]>(`${this.api}/categories`);
  }

  addCategory(category: string) {
    return this.http.post(`${this.api}/categories`, { category });
  }

  getQuestions(category: string) {
    return this.http.get<Question[]>(`${this.api}/questions/${category}`);
  }

  addQuestion(data: any) {
    return this.http.post<Question>(`${this.api}/question`, data);
  }

  saveAnswer(id: string, answerText: string) {
    return this.http.patch<Question>(`${this.api}/question/${id}`, { answerText });
  }

  deleteQuestion(id: string) {
    return this.http.delete(`${this.api}/question/${id}`);
  }

  uploadAttempt(questionId: string, fileType: string, blob: Blob) {
    const fd = new FormData();
    fd.append('file', blob, Date.now() + '.webm');
    fd.append('fileType', fileType);

    return this.http.post<Question>(`${this.api}/question/${questionId}/attempt`, fd);
  }

  deleteAttempt(questionId: string, attemptId: string) {
    return this.http.delete<Question>(`${this.api}/question/${questionId}/attempt/${attemptId}`);
  }
}
