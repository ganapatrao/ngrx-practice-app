import { Routes } from '@angular/router';

export const recorderRoutes: Routes = [
  // {  path: '',
  //   loadComponent: () => import('./topic-list/topic-list.component').then(m => m.TopicListComponent) 
  // } ,

    {  path: '', //recorder-interview
    loadComponent: () => import('./interview-recorder-page/interview-recorder-page.component').then(m => m.InterviewRecorderPageComponent) 
  } ,
  {
    path: 'recorder-attempt',
    loadComponent: () => import('./record-attempt/record-attempt.component').then(m => m.RecordAttemptComponent) 
  }
  ,
  {
    path: 'add-topic',
    loadComponent: () => import('./add-topic/add-topic.component').then(m => m.AddTopicComponent)
  },
  {
    path: 'topic/:id',
    loadComponent: () => import('./record-attempt/record-attempt.component').then(m => m.RecordAttemptComponent)
  },
  {
    path: 'feed',
    loadComponent: () => import('./dashboard-feed/dashboard-feed.component').then(m => m.DashboardFeedComponent)
  }
]