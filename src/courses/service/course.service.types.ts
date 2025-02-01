import { AddCourseResult, Course, CoursesResult } from '../data';

export interface ICourseService {
  getAllCourses(token: string): Promise<CoursesResult>;
  getDiscountedCourses(token: string): Promise<CoursesResult>;
  addCourse(data: Course, token: string): Promise<AddCourseResult>;
}
