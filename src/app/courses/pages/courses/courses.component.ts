import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IcourseState } from '../../state/courses.state';
import { Observable } from 'rxjs';
import { ICourseModel } from '../../course.model';
import { editFormSelector, selectCourses, showFormSelector } from '../../state/courses.selector';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { addCourse, showAddForm } from '../../state/courses.action';
import { AddCourseComponent } from './add-course/add-course.component';
import { MatDialog } from '@angular/material/dialog';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'; //

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CourseCardComponent,FormsModule,AsyncPipe,NgIf,NgFor,AddCourseComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
  searchText: string = '';
  $courses !: Observable<ICourseModel[]>;
  $createNewForm !: Observable<boolean>;
  $editForm !: Observable<boolean>
    private destroyRef = inject(DestroyRef);

  onSearchChange(newValue: string) {
    this.searchText = newValue;
  }

  constructor(private store:Store<{ course:IcourseState }>, private dialog:MatDialog) { }

  ngOnInit(): void {
    //this.$courses= this.store.select(state => state.course.courses);
    this.$courses = this.store.select(selectCourses)
    this.$createNewForm = this.store.select(showFormSelector) //get showform
    this.$editForm = this.store.select(editFormSelector)

  }


  private handleCreateCourseModal(): void {
  this.$createNewForm
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe((show) => {
      if (show) {
        const dialogRef = this.dialog.open(AddCourseComponent, {
          width: '450px',
          disableClose: true,
        });

        dialogRef.afterClosed().subscribe((result:any) => {
          this.store.dispatch(showAddForm({ create: false }));

     if (result?.action === 'save') {
      this.store.dispatch(addCourse({ courseData: result.data }));           
            // Example: Dispatch action to save new course to store or API
            // this.store.dispatch(addCourse({ course: result.data }));
          } else if (result?.action === 'cancel') {
            console.log('❌ Course creation canceled by user');
          }
        });
      }
    });
}

  createNewForm(){
    this.store.dispatch(showAddForm({ create: true }));
     this.handleCreateCourseModal();
  }

}

