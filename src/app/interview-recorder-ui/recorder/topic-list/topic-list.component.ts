import { Component, OnInit } from '@angular/core';
import { RecorderService } from '../recorder/recorder.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topic-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './topic-list.component.html',
  styleUrl: './topic-list.component.css'
})
export class TopicListComponent implements OnInit {
  
  topics: any[] = [];

  constructor(private service: RecorderService, private router: Router) {}

  ngOnInit() {
    this.loadTopics();
  }

  loadTopics() {
    this.service.getTopics().subscribe((res: any) => this.topics = res as any[]);
  }
}