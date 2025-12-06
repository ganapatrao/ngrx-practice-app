import { Component } from '@angular/core';
import { RecorderService } from '../recorder/recorder.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-topic',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './add-topic.component.html',
  styleUrl: './add-topic.component.css'
})
export class AddTopicComponent {

   category = '';
  subtopic = '';

  constructor(private service: RecorderService, private router: Router) {}

  save() {
    this.service.createTopic({ category: this.category, subtopic: this.subtopic })
      .subscribe(() => this.router.navigate(['/recorder']));
  }

}
