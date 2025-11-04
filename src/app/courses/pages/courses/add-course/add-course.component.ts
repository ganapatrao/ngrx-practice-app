import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { IcourseState } from '../../../state/courses.state';
import { showAddForm } from '../../../state/courses.action';
import { NgIf } from '@angular/common';
import { editFormSelector } from '../../../state/courses.selector';

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

  constructor(private store:Store<{ course:IcourseState }>) {}
    courseForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    title: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  ngOnInit(): void {
    this.store.select(editFormSelector).subscribe((value) => {
      this.editMode = value;
    });
  }

  private dialogRef = inject(MatDialogRef<AddCourseComponent>);

  onSubmit() {
  if (this.courseForm.valid) {
     this.store.dispatch(showAddForm({ create: false }));
    this.dialogRef.close({
      action: 'save',
      data: this.courseForm.value
    });
  }
}

onCancel() {
  this.dialogRef.close({ action: 'cancel' });
}

}
// function createCourse(arg0: { course: Partial<{ name: string | null; title: string | null; }>; }): any {
//   throw new Error('Function not implemented.');
// }

