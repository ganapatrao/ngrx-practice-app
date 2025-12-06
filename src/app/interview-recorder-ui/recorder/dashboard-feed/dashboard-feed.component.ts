import { Component, OnInit } from '@angular/core';
import { RecorderService } from '../recorder/recorder.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-feed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-feed.component.html',
  styleUrl: './dashboard-feed.component.css'
})
export class DashboardFeedComponent implements OnInit {

  feed: any[] = [];

  constructor(private service: RecorderService) {}

  ngOnInit() {
    this.service.getFeed().subscribe((res: any[]) => {
      this.feed = res;
    });
  }
}
