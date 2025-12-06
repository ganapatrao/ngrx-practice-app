import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecorderService {

http = inject(HttpClient);

  api = 'http://localhost:3000/api';

  createTopic(data: any) {
    return this.http.post(`${this.api}/topic`, data);
  }

  getTopics() {
    return this.http.get(`${this.api}/topics`);
  }

  getTopic(id: string) {
    return this.http.get(`${this.api}/topic/${id}`);
  }

  uploadAttempt(topicId: string, fileType: string, blob: Blob) {
    const form = new FormData();
    form.append('topicId', topicId);
    form.append('fileType', fileType);
    form.append('file', blob, `${Date.now()}.webm`);

    return this.http.post(`${this.api}/attempt`, form);
  }

  getFeed() {
    return this.http.get<any[]>(`${this.api}/feed`);
  }
}
