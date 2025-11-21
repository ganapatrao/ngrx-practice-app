import { Component, Input } from '@angular/core';
import { ICourseModel } from '../../course.model';
import { Store } from '@ngrx/store';
import { IcourseState } from '../../state/courses.state';
import { deleteCourse, editCourse, setSelectedCourses, showAddForm } from '../../state/courses.action';
import { Observable } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input() course!: ICourseModel;


  constructor(
    private store: Store<{ course:IcourseState }>,
    private dialog: MatDialog
  ) { }

  onEdit() {
    this.store.dispatch(editCourse({ edit: true }));
    this.store.dispatch(showAddForm({ create: true }));
    this.store.dispatch(setSelectedCourses({ course: this.course }));
  }

  onDelete() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {
        title: 'Confirm Delete',
        message: `Are you sure you want to delete "${this.course.name}"?`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && this.course.id) {
        this.store.dispatch(deleteCourse({ courseId: this.course.id }));
      }
    });
  }

}

// export interface CourseCardInputs {
//   course: ICourseModel;
// }
