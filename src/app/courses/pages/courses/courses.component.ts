import { Component, OnInit } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IcourseState } from '../../state/courses.state';
import { Observable } from 'rxjs';
import { ICourseModel } from '../../course.model';
import { selectCourses } from '../../state/courses.selector';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CourseCardComponent,FormsModule,AsyncPipe,NgIf,NgFor],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
  searchText: string = '';
  $courses !: Observable<ICourseModel[]>;

  onSearchChange(newValue: string) {
    this.searchText = newValue;
  }

  constructor(private store:Store<{ course:IcourseState }>) { }

  ngOnInit(): void {
    //this.$courses= this.store.select(state => state.course.courses);
    this.$courses = this.store.select(selectCourses)

  }

}



