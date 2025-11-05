import { ICourseModel } from '../course.model';

export interface IcourseState {
  courses: ICourseModel[];
  showCourseForm: boolean;
  editForm: boolean;
  selectedCourse?: ICourseModel;
}

export const initialCourseState: IcourseState = { courses: [{
  id: '1',
    name: 'Angular Mastery',
    title: 'Build Scalable Frontend Applications'
  },
  {
    id: '2',
    name: 'TypeScript Deep Dive',
    title: 'Master Strong Typing & Modern JavaScript Features'
  },
  {
    id: '3',
    name: 'RxJS Essentials',
    title: 'Reactive Programming for Real-time Data Streams'
  },
  {
    id: '4',
    name: 'Node.js Fundamentals',
    title: 'Backend Development with Express and APIs'
  },
  {
    id: '5',
    name: 'Frontend Architecture',
    title: 'Design Clean, Scalable, and Maintainable UI Projects'
  }],
  showCourseForm: false,
  editForm: false,
  selectedCourse: undefined
}
