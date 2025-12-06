import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RecorderService } from '../recorder/recorder.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-record-attempt',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './record-attempt.component.html',
  styleUrl: './record-attempt.component.css'
})
export class RecordAttemptComponent {

  topicId = '';
  isRecording = false;
  chunks: any[] = [];
  mediaRecorder: any;
  previewUrl: any;
  mode: 'audio' | 'video' = 'audio';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: RecorderService
  ) {
    this.topicId = this.route.snapshot.params['id'];
  }

  async startRecording() {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: this.mode === 'video'
    });

    this.mediaRecorder = new MediaRecorder(stream);
    this.chunks = [];

    this.mediaRecorder.ondataavailable = (e: any) => this.chunks.push(e.data);

    this.mediaRecorder.onstop = () => {
      const blob = new Blob(this.chunks, {
        type: this.mode === 'audio' ? 'audio/webm' : 'video/webm'
      });
      this.previewUrl = URL.createObjectURL(blob);
    };

    this.mediaRecorder.start();
    this.isRecording = true;
  }

  stopRecording() {
    this.mediaRecorder.stop();
    this.isRecording = false;
  }

  save() {
    const blob = new Blob(this.chunks, {
      type: this.mode === 'audio' ? 'audio/webm' : 'video/webm'
    });

    this.service.uploadAttempt(this.topicId, this.mode, blob).subscribe(() => {
      this.router.navigate(['/recorder/topic', this.topicId]);
    });
  }


}
