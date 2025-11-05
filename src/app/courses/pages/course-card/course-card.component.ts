import { Component, Input } from '@angular/core';
import { ICourseModel } from '../../course.model';
import { Store } from '@ngrx/store';
import { IcourseState } from '../../state/courses.state';
import { editCourse, setSelectedCourses, showAddForm } from '../../state/courses.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input() course!: ICourseModel;


  constructor(private store:Store<{ course:IcourseState }>) { }

  onEdit() {
    this.store.dispatch(editCourse({ edit: true }));
     this.store.dispatch(showAddForm({ create: true }));
     this.store.dispatch(setSelectedCourses({ course: this.course }));
      
  }

}

// export interface CourseCardInputs {
//   course: ICourseModel;
// }
