import { Component, Input } from '@angular/core';
import { ICourseModel } from '../../course.model';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input() course!: ICourseModel;

}

// export interface CourseCardInputs {
//   course: ICourseModel;
// }
