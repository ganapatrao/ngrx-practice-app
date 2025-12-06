import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RecorderService } from '../recorder/recorder.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topic-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './topic-details.component.html',
  styleUrl: './topic-details.component.css'
})
export class TopicDetailsComponent implements OnInit {

  topic: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: RecorderService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.service.getTopic(id).subscribe(res => this.topic = res);
  }
}