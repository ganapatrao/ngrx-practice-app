import { ICourseModel } from '../course.model';

export interface IcourseState {
  courses: ICourseModel[];
  showCourseForm: boolean;
  editForm: boolean;
}

export const initialCourseState: IcourseState = { courses: [{
    name: 'Angular Mastery',
    title: 'Build Scalable Frontend Applications'
  },
  {
    name: 'TypeScript Deep Dive',
    title: 'Master Strong Typing & Modern JavaScript Features'
  },
  {
    name: 'RxJS Essentials',
    title: 'Reactive Programming for Real-time Data Streams'
  },
  {
    name: 'Node.js Fundamentals',
    title: 'Backend Development with Express and APIs'
  },
  {
    name: 'Frontend Architecture',
    title: 'Design Clean, Scalable, and Maintainable UI Projects'
  }],
  showCourseForm: false,
  editForm: false
}
