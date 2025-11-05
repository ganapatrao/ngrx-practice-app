import { Component, inject, DestroyRef } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { IcourseState } from '../../../state/courses.state';
import { addCourse, showAddForm, updateCourse } from '../../../state/courses.action';
import { NgIf } from '@angular/common';
import { editFormSelector, getCoursesSelector } from '../../../state/courses.selector';
import { ICourseModel } from '../../../course.model';
import { Observable } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { validateHorizontalPosition } from '@angular/cdk/overlay';


@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [ ReactiveFormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,MatIconModule,NgIf],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent {
  editMode: boolean = false;
  // selected course to edit; can be null/undefined when not in edit mode
  coursetoEdit: ICourseModel | null = null;
  private destroyRef = inject(DestroyRef);


  constructor(private store:Store<{ course:IcourseState }>) {}
    courseForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    title: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  ngOnInit(): void {
    this.store.select(editFormSelector) //boolen for edit mode
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => {
        this.editMode = value;
        if (this.editMode) {
          this.subscribetoselectedcourse();
        } else {
          // clear any edit data when not in edit mode
          this.coursetoEdit = null;
          this.courseForm.reset();
        }
      });
    
  }

  subscribetoselectedcourse(): void {
    this.store.select(getCoursesSelector)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((val) => {
        // val may be undefined; store as null for clarity
        this.coursetoEdit = val ?? null;
        if (val) {
          this.courseForm.patchValue({
            name: val.name || '',
            title: val.title || ''
          });
        }
      });
  }

  private dialogRef = inject(MatDialogRef<AddCourseComponent>);

  onSubmit() {

    // this.dialogRef.close({
    //   action: 'save',
    //   data: this.courseForm.value
    // });
    //lets not add data to course and save there , we will use state to save from here to leverage the use of ngrx

    if (this.courseForm.valid) {
      const courseData: ICourseModel = {
        id: this.coursetoEdit ? this.coursetoEdit.id : Date.now().toString(),
        name: this.courseForm.value.name || '',
        title: this.courseForm.value.title || ''
      };

      if (this.coursetoEdit) {
        this.store.dispatch(updateCourse({ courseData }));
      } else {
        this.store.dispatch(addCourse({ courseData }));
      }

      this.store.dispatch(showAddForm({ create: false })); // close form flag
      this.dialogRef.close();
    }
}     
onCancel() {
  this.dialogRef.close({ action: 'cancel' });
}

}
// function createCourse(arg0: { course: Partial<{ name: string | null; title: string | null; }>; }): any {
//   throw new Error('Function not implemented.');
// }

